// GraphQL
import { gql } from 'apollo-server-express';

// Entities
import { User } from '../../entities/User';

// Utils
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

// Types
import { MutationAddUserArgs, MutationLoginArgs, MutationLoginReturn, MutationAddUserReturn } from './types';
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
    addUser(username: String!, password: String!): Response
    login(username: String!, password: String!): Response
  }
`;

export const resolvers: IResolvers = {
  Mutation: {
    async addUser(_, { username, password }: MutationAddUserArgs, context: GraphQLContext): MutationAddUserReturn {
      const userRepository = getRepository(User);
      const theUser = await userRepository.findOne({ where: { username } });
      if (theUser) {
        return {
          error: { message: 'Username already exists' },
        };
      }
      let newUser = new User();
      newUser.username = username;
      newUser.password = await bcrypt.hash(password, 10);
      newUser = await userRepository.save(newUser);

      context.req.session.userId = newUser.id;

      return { user: newUser };
    },
    async login(_, { username, password }: MutationLoginArgs, context: GraphQLContext): MutationLoginReturn {
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
