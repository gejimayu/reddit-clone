// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../../entities/post';

// Utils
import { getRepository } from 'typeorm';

// Types
import { MutationCreatePostArgs, MutationUpdatePostArgs, MutationDeletePostArgs } from './types';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    createdAt: String!
    updatedAt: String
  }

  extend type Query {
    posts: [Post]
  }

  extend type Mutation {
    createPost(title: String!): Post
    updatePost(id: ID!, title: String!): Post
    deletePost(id: ID!): Boolean
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
    async createPost(_, { title }: MutationCreatePostArgs) {
      const postRepository = getRepository(Post);
      const newPost = new Post();
      newPost.title = title;
      return postRepository.save(newPost);
    },
    async updatePost(_, { id, title }: MutationUpdatePostArgs) {
      const postRepository = getRepository(Post);
      const currentPost = await postRepository.findOne(id);
      if (currentPost) {
        currentPost.title = title;
        await postRepository.save(currentPost);
      }
      return currentPost;
    },
    async deletePost(_, { id }: MutationDeletePostArgs) {
      const postRepository = getRepository(Post);
      await postRepository.delete(id);
      return true;
    },
  },
};
