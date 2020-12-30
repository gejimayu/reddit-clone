// GraphQL
import { gql, IResolvers } from 'apollo-server-express';

// Entities
import { Post } from '../../entities/post';
import { PostUpvoters } from '../../entities/post_upvoters';

// Middlewares
import isAuthenticated from '../middlewares/isAuthenticated';

// Constants
import { LIMIT_POST } from './constants';

// Utils
import { getRepository, getManager } from 'typeorm';

// Types
import {
  QueryGetPostsArgs,
  MutationCreatePostArgs,
  MutationUpdatePostArgs,
  MutationDeletePostArgs,
  MutationCreatePostReturn,
  MutationUpvoteArgs,
  QueryGetPostsReturn,
} from './types';
import { GraphQLContext } from '../../types/context';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    text: String!
    textSnippet: String!
    creatorId: ID!
    creator: User!
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
    upvote(postId: ID!, point: Int!): Boolean
  }
`;

export const resolvers: IResolvers = {
  Post: {
    textSnippet(parent: Post): string {
      return parent.text.slice(0, 100);
    },
    creator(parent: Post): { id: number; username: string } {
      // hide creator's mail and other info, we only need username and id
      return {
        id: parent.creator.id,
        username: parent.creator.username,
      };
    },
  },
  Query: {
    async posts(_, { limit, cursor }: QueryGetPostsArgs): QueryGetPostsReturn {
      const realLimit = Math.min(LIMIT_POST, limit);

      const queryBuilder = getRepository(Post)
        .createQueryBuilder('post')
        .innerJoinAndSelect('post.creator', 'user')
        .orderBy('post.createdAt', 'DESC')
        .take(realLimit + 1); // to get the next cursor

      if (cursor) {
        queryBuilder.where('post.createdAt < :cursor', { cursor: new Date(parseInt(cursor)) });
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

    async upvote(_, { postId, point }: MutationUpvoteArgs, context: GraphQLContext) {
      isAuthenticated(context);

      const { userId } = context.req.session;
      const realPoint = point > 0 ? 1 : -1;

      const upvote = await PostUpvoters.findOne({ userId, postId });

      // check if the user has upvoted the post before and they're changing the vote
      await getManager().transaction('READ COMMITTED', async (transactionalEntityManager) => {
        if (upvote && upvote.point !== realPoint) {
          await transactionalEntityManager.query(
            `
              UPDATE post_upvoters 
              SET point = $1
              WHERE "postId" = $2 AND "userId" = $3
            `,
            [realPoint, postId, userId],
          );
          await transactionalEntityManager.query(
            `
              UPDATE post 
              SET points = points + $1
              WHERE id = $2
            `,
            [2 * realPoint, postId],
          );
        } else if (!upvote) {
          // if user has never voted to this post before
          await transactionalEntityManager.query(
            `
                INSERT INTO post_upvoters ("userId", "postId", "point")
                VALUES ($1, $2, $3)
              `,
            [userId, postId, realPoint],
          );
          await transactionalEntityManager.query(
            `
                UPDATE post 
                SET points = points + $1
                WHERE id = $2
              `,
            [realPoint, postId],
          );
        }
      });

      return true;
    },
  },
};
