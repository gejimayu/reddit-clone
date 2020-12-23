import { Error } from '../baseTypes';
import { User } from '../../entities/User';

export interface MutationAddUserArgs {
  username: string;
  password: string;
}
export interface MutationLoginArgs {
  username: string;
  password: string;
}

export type MutationAddUserReturn = Promise<{
  error?: Error;
  user?: User;
}>;
export type MutationLoginReturn = Promise<{
  error?: Error;
  user?: User;
}>;
