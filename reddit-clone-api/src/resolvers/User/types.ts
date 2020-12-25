import { Error } from '../baseTypes';
import { User } from '../../entities/user';

export interface MutationAddUserArgs {
  username: string;
  email: string;
  password: string;
}
export interface MutationLoginArgs {
  usernameOrEmail: string;
  password: string;
}
export interface MutationForgetPasswordArgs {
  email: string;
}
export interface MutationChangePasswordArgs {
  password: string;
  token: string;
}

export type QueryMeReturn = Promise<User | null | undefined>;
export type MutationAddUserReturn = Promise<{
  error?: Error;
  user?: User;
}>;
export type MutationLoginReturn = Promise<{
  error?: Error;
  user?: User;
}>;
export type MutationChangePasswordReturn = Promise<{
  error?: Error;
  user?: User;
}>;
