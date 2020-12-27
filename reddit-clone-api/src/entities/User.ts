import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

import { Post } from './post';
import { PostUpvoters } from './post_upvoters';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: '200', unique: true })
  username: string;

  @Column('varchar', { length: '200', unique: true })
  email: string;

  @Column('varchar', { length: '200' })
  password: string;

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @OneToMany(() => PostUpvoters, (upvotes) => upvotes.user)
  upvotes: PostUpvoters[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
