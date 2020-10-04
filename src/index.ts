import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Post } from './entities/Post';
import ORM_CONFIG from './config/type-orm.config';

createConnection(ORM_CONFIG)
  .then((connection) => {
    console.log('successfully connceted to database');
    const post = new Post();
    post.title = 'my first post';
    return connection.manager.save(post).then((post) => console.log(`Post ${post.id} has been saved`));
  })
  .catch((error) => console.log(error));
