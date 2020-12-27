import { Entity, Column, BaseEntity, ManyToOne, PrimaryColumn } from 'typeorm';

import { User } from './user';
import { Post } from './post';

@Entity()
export class PostUpvoters extends BaseEntity {
  @PrimaryColumn()
  postId: number;

  @PrimaryColumn()
  userId: number;

  @Column({ type: 'int' })
  point: number;

  @ManyToOne(() => Post, (post) => post.upvotes, { onDelete: 'CASCADE' })
  post: Post;

  @ManyToOne(() => User, (user) => user.upvotes, { onDelete: 'CASCADE' })
  user: User;
}
