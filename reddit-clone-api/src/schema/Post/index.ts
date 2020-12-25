// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../../entities/post';

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
      return Post.find({});
    },
  },
  Mutation: {
    async createPost(_, { title }: MutationCreatePostArgs) {
      const newPost = new Post();
      newPost.title = title;
      return Post.save(newPost);
    },
    async updatePost(_, { id, title }: MutationUpdatePostArgs) {
      const currentPost = await Post.findOne(id);
      if (currentPost) {
        currentPost.title = title;
        await Post.save(currentPost);
      }
      return currentPost;
    },
    async deletePost(_, { id }: MutationDeletePostArgs) {
      await Post.delete(id);
      return true;
    },
  },
};
