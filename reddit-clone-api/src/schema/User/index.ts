// GraphQL
import { gql } from 'apollo-server-express';

// Entities
import { User } from '../../entities/User';

// Utils
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { validateEmail } from '../../utils/validator';
import sendEmail from '../../utils/sendEmail';
import { v4 } from 'uuid';

// Constants
import { COOKIE_NAME_LOGIN_SESSION } from '../../constants/cookies';
import { FORGET_PASSWORD_PREFIX } from '../../constants/redisKey';

// Types
import {
  MutationAddUserArgs,
  MutationLoginArgs,
  MutationLoginReturn,
  MutationAddUserReturn,
  MutationForgetPasswordArgs,
  MutationChangePasswordArgs,
  MutationChangePasswordReturn,
  QueryMeReturn,
} from './types';
import { GraphQLContext } from '../../types/context';
import { IResolvers } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String
  }

  type Response {
    user: User
    error: Error
  }

  extend type Query {
    me: User
  }

  extend type Mutation {
    addUser(username: String!, email: String!, password: String!): Response
    login(usernameOrEmail: String!, password: String!): Response
    logout: Boolean
    forgetPassword(email: String!): Boolean
    changePassword(password: String!, token: String!): Response
  }
`;

export const resolvers: IResolvers = {
  Query: {
    async me(_, __, { req }: GraphQLContext): QueryMeReturn {
      if (!req.session.userId) {
        return null;
      }
      const userRepository = getRepository(User);
      return userRepository.findOne({ id: req.session.userId });
    },
  },

  Mutation: {
    async addUser(
      _,
      { username, email, password }: MutationAddUserArgs,
      context: GraphQLContext,
    ): MutationAddUserReturn {
      const userRepository = getRepository(User);
      let theUser = await userRepository.findOne({ where: { username } });
      if (theUser) {
        return {
          error: { fieldName: 'username', message: 'Username already exists' },
        };
      }
      theUser = await userRepository.findOne({ where: { email } });
      if (theUser) {
        return {
          error: { fieldName: 'email', message: 'Email already exists' },
        };
      }
      let newUser = new User();
      newUser.username = username;
      newUser.email = email;
      newUser.password = await bcrypt.hash(password, 10);
      newUser = await userRepository.save(newUser);

      context.req.session.userId = newUser.id;

      return { user: newUser };
    },

    async login(_, { usernameOrEmail, password }: MutationLoginArgs, context: GraphQLContext): MutationLoginReturn {
      const userRepository = getRepository(User);

      const theUser = await userRepository.findOne({
        where: validateEmail(usernameOrEmail) ? { email: usernameOrEmail } : { username: usernameOrEmail },
      });
      if (!theUser) {
        return {
          error: { fieldName: 'usernameOrEmail', message: 'Username/Email does not exist' },
        };
      }

      const isPasswordValid = await bcrypt.compare(password, theUser.password);
      if (!isPasswordValid) {
        return {
          error: { fieldName: 'password', message: 'Password is not correct.' },
        };
      }

      context.req.session.userId = theUser.id;

      return { user: theUser };
    },

    async logout(_, __, { req, res }: GraphQLContext): Promise<boolean> {
      return new Promise((resolve) => {
        req.session.destroy((err) => {
          if (err) {
            console.log(err);
            return resolve(false);
          }

          res.clearCookie(COOKIE_NAME_LOGIN_SESSION);
          return resolve(true);
        });
      });
    },

    async forgetPassword(_, { email }: MutationForgetPasswordArgs, { redis }: GraphQLContext): Promise<boolean> {
      const userRepository = getRepository(User);
      const theUser = await userRepository.findOne({ where: { email } });
      if (!theUser) {
        return true;
      }

      const token = v4();
      await redis.set(FORGET_PASSWORD_PREFIX + token, theUser.id, 'ex', 1000 * 60 * 60 * 24 * 3); // 3 days

      await sendEmail({
        to: email,
        html: `<a href="http://localhost:3000/change-password/${token}">reset password</a>`,
      });

      return true;
    },

    async changePassword(
      _,
      { password, token }: MutationChangePasswordArgs,
      { req, redis }: GraphQLContext,
    ): MutationChangePasswordReturn {
      const userId = await redis.get(FORGET_PASSWORD_PREFIX + token);
      if (!userId) {
        return {
          error: { fieldName: 'token', message: 'Token is expired' },
        };
      }
      const userRepository = getRepository(User);
      const theUser = await userRepository.findOne({ where: { id: userId } });
      if (!theUser) {
        return {
          error: { fieldName: 'token', message: 'User does not exist' },
        };
      }
      theUser.password = await bcrypt.hash(password, 10);
      await userRepository.save(theUser);

      req.session.userId = theUser.id;

      await redis.del(FORGET_PASSWORD_PREFIX + token);

      return { user: theUser };
    },
  },
};
