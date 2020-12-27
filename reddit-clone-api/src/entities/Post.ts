import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';

import { User } from './user';
import { PostUpvoters } from './post_upvoters';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creatorId: number;

  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @Column('varchar', { length: '200' })
  title: string;

  @Column('varchar')
  text: string;

  @Column({ type: 'int', default: 0 })
  points: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => User, { cascade: ['remove'] })
  @JoinTable({ name: 'post_upvoters' })
  upvoter: User[];

  @OneToMany(() => PostUpvoters, (upvotes) => upvotes.post)
  upvotes: PostUpvoters[];
}
