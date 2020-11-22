// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../../entities/post';

// Utils
import { getRepository } from 'typeorm';

// Types
import { MutationCreatePostArgs } from './types';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    createdAt: String!
    updatedAt: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(title: String!): Post
  }
`;

export const resolvers: IResolvers = {
  Query: {
    posts() {
      const postRepository = getRepository(Post);
      return postRepository.find({});
    },
  },
  Mutation: {
    async createPost(_, args: MutationCreatePostArgs) {
      const postRepository = getRepository(Post);
      const newPost = new Post();
      newPost.title = args.title;
      return postRepository.save(newPost);
    },
  },
};
