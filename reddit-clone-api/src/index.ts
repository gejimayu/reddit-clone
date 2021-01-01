// TypeORM
import 'reflect-metadata'; // required to import beforehand by typeORM
import { createConnection } from 'typeorm';

// Apollo / GrahpQL
import { ApolloServer } from 'apollo-server-express';
import { baseTypeDefs } from './resolvers/baseTypeDefs';
import { typeDefs as postTypeDefs, resolvers as postResolvers } from './resolvers/Post';
import { typeDefs as userTypeDefs, resolvers as userResolvers } from './resolvers/User';

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
import { __IS_PRODUCTION__ } from './constants/config';

// Types
import { GraphQLContext } from './types/context';

function connectToDB() {
  createConnection()
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((err) => {
      console.log(err);
      // retry with 2s delay
      setTimeout(() => {
        console.log('retrying');
        connectToDB();
      }, 2000);
    });
}

const main = async () => {
  const app = express();

  // DB setup
  connectToDB();

  // Middlewares
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    }),
  );

  // Redis/session setup
  const RedisStore = connectRedis(session);
  const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT as string),
  });
  app.use(
    session({
      name: COOKIE_NAME_LOGIN_SESSION,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax',
        secure: __IS_PRODUCTION__,
      },
      secret: process.env.SESSION_SECRET as string,
      resave: false,
    }),
  );

  // Apollo Server setup
  const apolloServer = new ApolloServer({
    typeDefs: [baseTypeDefs, userTypeDefs, postTypeDefs],
    resolvers: [userResolvers, postResolvers],
    context: ({ req, res }): GraphQLContext => ({ req, res, redis }),
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
  app.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT);
  });
};

main().catch((error) => console.log(error));
