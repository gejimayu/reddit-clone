// GraphQL
import { gql } from 'apollo-server-express';

// Entities
import { User } from '../../entities/User';

// Utils
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

// Types
import { MutationAddUserArgs } from './types';
import { IResolvers } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    createdAt: String!
    updatedAt: String
  }

  extend type Mutation {
    addUser(username: String!, password: String!): User
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
  },
};
