// TypeORM
import 'reflect-metadata'; // required to import beforehand by typeORM
import { createConnection } from 'typeorm';

// Apollo / GrahpQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema/post';

// Express
import express from 'express';

const main = async () => {
  // DB setup
  const orm = await createConnection();
  console.log('Successfully connceted to database');

  // Server setup
  const apolloServer = new ApolloServer({ typeDefs, resolvers, context: () => ({ ormManager: orm.manager }) });
  const app = express();
  apolloServer.applyMiddleware({ app });

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
