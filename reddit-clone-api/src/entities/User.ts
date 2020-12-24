import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { length: '200', unique: true })
  username: string;

  @Column('varchar', { length: '200', unique: true })
  email: string;

  @Column('varchar', { length: '200' })
  password: string;
}
