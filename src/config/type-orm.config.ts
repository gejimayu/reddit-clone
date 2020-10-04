import path from 'path';

//Types
import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gianfranco',
  password: '',
  database: 'reddit-clone',
  entities: [path.join(__dirname + '/../entities/**/*.{js,ts}')],
  logging: true,
} as ConnectionOptions;
