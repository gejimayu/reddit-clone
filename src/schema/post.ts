// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../entities/post';

// Types
import { GraphQLContext } from '../types/context';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
  }

  type Query {
    posts: [Post]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    posts(_, __, { ormManager }: GraphQLContext) {
      return ormManager.find(Post, {});
    },
  },
};
