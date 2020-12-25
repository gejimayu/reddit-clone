// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../../entities/post';

// Middlewares
import isAuthenticated from '../middlewares/isAuthenticated';

// Types
import {
  MutationCreatePostArgs,
  MutationUpdatePostArgs,
  MutationDeletePostArgs,
  MutationCreatePostReturn,
} from './types';
import { GraphQLContext } from '../../types/context';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    text: String!
    creatorId: ID!
    points: Int!
    createdAt: String!
    updatedAt: String
  }

  type PostResponse {
    post: Post
    error: Error
  }

  extend type Query {
    posts: [Post]
  }

  extend type Mutation {
    createPost(title: String!, text: String!): PostResponse
    updatePost(id: ID!, title: String!, text: String!): Post
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
    async createPost(_, { title, text }: MutationCreatePostArgs, context: GraphQLContext): MutationCreatePostReturn {
      isAuthenticated(context);

      let newPost = new Post();
      newPost.title = title;
      newPost.text = text;
      newPost.creatorId = context.req.session.userId as number;
      newPost = await Post.save(newPost);

      return { post: newPost };
    },

    async updatePost(_, { id, title, text }: MutationUpdatePostArgs) {
      const currentPost = await Post.findOne(id);
      if (!currentPost) {
        return null;
      }

      if (title) {
        currentPost.title = title;
      }
      if (text) {
        currentPost.text = text;
      }
      await Post.save(currentPost);
      return currentPost;
    },

    async deletePost(_, { id }: MutationDeletePostArgs) {
      await Post.delete(id);
      return true;
    },
  },
};
