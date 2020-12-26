// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../../entities/post';

// Middlewares
import isAuthenticated from '../middlewares/isAuthenticated';

// Constants
import { LIMIT_POST } from './constants';

// Utils
import { getRepository } from 'typeorm';

// Types
import {
  QueryGetPostsArgs,
  MutationCreatePostArgs,
  MutationUpdatePostArgs,
  MutationDeletePostArgs,
  MutationCreatePostReturn,
  QueryGetPostsReturn,
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

  type QueryPostsResponse {
    posts: [Post]
    hasMore: Boolean!
  }

  extend type Query {
    posts(limit: Int!, cursor: String): QueryPostsResponse
  }

  extend type Mutation {
    createPost(title: String!, text: String!): PostResponse
    updatePost(id: ID!, title: String!, text: String!): Post
    deletePost(id: ID!): Boolean
  }
`;

export const resolvers: IResolvers = {
  Query: {
    async posts(_, { limit, cursor }: QueryGetPostsArgs): QueryGetPostsReturn {
      const realLimit = Math.min(LIMIT_POST, limit);

      const queryBuilder = getRepository(Post)
        .createQueryBuilder('user')
        .orderBy('user.createdAt', 'DESC')
        .take(realLimit + 1); // to get the next cursor

      if (cursor) {
        queryBuilder.where('user.createdAt < :cursor', { cursor: new Date(parseInt(cursor)) });
      }

      const posts = await queryBuilder.getMany();

      return {
        posts: posts.slice(0, realLimit),
        hasMore: posts.length > realLimit,
      };
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
