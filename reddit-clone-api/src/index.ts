// TypeORM
import 'reflect-metadata'; // required to import beforehand by typeORM
import { createConnection } from 'typeorm';

// Apollo / GrahpQL
import { ApolloServer } from 'apollo-server-express';
import { baseTypeDefs } from './schema/baseTypeDefs';
import { typeDefs as postTypeDefs, resolvers as postResolvers } from './schema/Post';
import { typeDefs as userTypeDefs, resolvers as userResolvers } from './schema/User';

// Express
import express from 'express';

// Redis
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';

// Middlewares
import cors from 'cors';

// Constants
import { COOKIE_NAME_LOGIN_SESSION } from './constants/cookies';

// Types
import { GraphQLContext } from './types/context';

const main = async () => {
  const app = express();

  // DB setup
  const orm = await createConnection();
  console.log('Successfully connected to database');

  // Middlewares
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  // Redis/session setup
  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    session({
      name: COOKIE_NAME_LOGIN_SESSION,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax',
        secure: false, // TODO: turn on later
      },
      secret: 'dummy-secret',
      resave: false,
    }),
  );

  // Apollo Server setup
  const apolloServer = new ApolloServer({
    typeDefs: [baseTypeDefs, userTypeDefs, postTypeDefs],
    resolvers: [userResolvers, postResolvers],
    context: ({ req, res }): GraphQLContext => ({ ormManager: orm.manager, req, res, redis }),
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  // Endpoints
  app.get('/', (_, res) => {
    res.send('hello');
  });

  // Start server
  app.listen(4000, () => {
    console.log('Server started on localhost:4000');
  });
};

main().catch((error) => console.log(error));
