// GraphQL
import { gql } from 'apollo-server-express';

// Entities
import { User } from '../../entities/User';

// Utils
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

// Types
import { MutationAddUserArgs, MutationLoginArgs, MutationAddUserReturn } from './types';
import { GraphQLContext } from '../../types/context';
import { IResolvers } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    createdAt: String!
    updatedAt: String
  }

  type Response {
    user: User
    error: Error
  }

  extend type Mutation {
    addUser(username: String!, password: String!): User
    login(username: String!, password: String!): Response
  }
`;

export const resolvers: IResolvers = {
  Mutation: {
    async addUser(_, { username, password }: MutationAddUserArgs) {
      const userRepository = getRepository(User);
      const newUser = new User();
      newUser.username = username;
      newUser.password = await bcrypt.hash(password, 10);
      return userRepository.save(newUser);
    },
    async login(_, { username, password }: MutationLoginArgs, context: GraphQLContext): MutationAddUserReturn {
      const userRepository = getRepository(User);
      const theUser = await userRepository.findOne({ where: { username } });
      if (!theUser) {
        return {
          error: { message: 'User does not exist' },
        };
      }

      const isPasswordValid = await bcrypt.compare(password, theUser.password);
      if (!isPasswordValid) {
        return {
          error: { message: 'Password is not correct.' },
        };
      }

      context.req.session.userId = theUser.id;

      return { user: theUser };
    },
  },
};
