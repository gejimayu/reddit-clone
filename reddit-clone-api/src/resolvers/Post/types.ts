import { Error } from '../baseTypes';
import { Post } from '../../entities/post';

export interface MutationCreatePostArgs {
  title: string;
  text: string;
}
export interface MutationUpdatePostArgs {
  id: string;
  title: string;
  text: string;
}
export interface MutationDeletePostArgs {
  id: string;
}

export type MutationCreatePostReturn = Promise<{
  error?: Error;
  post?: Post;
}>;
