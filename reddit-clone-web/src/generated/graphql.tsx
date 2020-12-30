import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  posts?: Maybe<QueryPostsResponse>;
};

export type QueryPostsArgs = {
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<UserResponse>;
  login?: Maybe<UserResponse>;
  logout?: Maybe<Scalars['Boolean']>;
  forgetPassword?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<UserResponse>;
  createPost?: Maybe<PostResponse>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['Boolean']>;
  upvote?: Maybe<Scalars['Boolean']>;
};

export type MutationAddUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginArgs = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type MutationForgetPasswordArgs = {
  email: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationCreatePostArgs = {
  title: Scalars['String'];
  text: Scalars['String'];
};

export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
};

export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};

export type MutationUpvoteArgs = {
  postId: Scalars['ID'];
  point: Scalars['Int'];
};

export type Error = {
  __typename?: 'Error';
  fieldName?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  user?: Maybe<User>;
  error?: Maybe<Error>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
  textSnippet: Scalars['String'];
  creatorId: Scalars['ID'];
  creator: User;
  points: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostResponse = {
  __typename?: 'PostResponse';
  post?: Maybe<Post>;
  error?: Maybe<Error>;
};

export type QueryPostsResponse = {
  __typename?: 'QueryPostsResponse';
  posts?: Maybe<Array<Maybe<Post>>>;
  hasMore: Scalars['Boolean'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type PostSnippetFragment = { __typename?: 'Post' } & Pick<
  Post,
  'id' | 'title' | 'textSnippet' | 'points' | 'creatorId' | 'createdAt'
> & { creator: { __typename?: 'User' } & Pick<User, 'username'> };

export type UserBasicInfoFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'username' | 'email'
>;

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String'];
  token: Scalars['String'];
}>;

export type ChangePasswordMutation = { __typename?: 'Mutation' } & {
  changePassword?: Maybe<
    { __typename?: 'UserResponse' } & {
      error?: Maybe<
        { __typename?: 'Error' } & Pick<Error, 'fieldName' | 'message'>
      >;
      user?: Maybe<{ __typename?: 'User' } & UserBasicInfoFragment>;
    }
  >;
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  text: Scalars['String'];
}>;

export type CreatePostMutation = { __typename?: 'Mutation' } & {
  createPost?: Maybe<
    { __typename?: 'PostResponse' } & {
      error?: Maybe<{ __typename?: 'Error' } & Pick<Error, 'message'>>;
      post?: Maybe<
        { __typename?: 'Post' } & Pick<
          Post,
          | 'id'
          | 'title'
          | 'text'
          | 'creatorId'
          | 'points'
          | 'createdAt'
          | 'updatedAt'
        >
      >;
    }
  >;
};

export type ForgetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgetPasswordMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'forgetPassword'
>;

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'UserResponse' } & {
      error?: Maybe<
        { __typename?: 'Error' } & Pick<Error, 'fieldName' | 'message'>
      >;
      user?: Maybe<{ __typename?: 'User' } & UserBasicInfoFragment>;
    }
  >;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'logout'
>;

export type AddUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type AddUserMutation = { __typename?: 'Mutation' } & {
  addUser?: Maybe<
    { __typename?: 'UserResponse' } & {
      error?: Maybe<
        { __typename?: 'Error' } & Pick<Error, 'fieldName' | 'message'>
      >;
      user?: Maybe<{ __typename?: 'User' } & UserBasicInfoFragment>;
    }
  >;
};

export type UpvoteMutationVariables = Exact<{
  postId: Scalars['ID'];
  point: Scalars['Int'];
}>;

export type UpvoteMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'upvote'
>;

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'User' } & UserBasicInfoFragment>;
};

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;

export type PostsQuery = { __typename?: 'Query' } & {
  posts?: Maybe<
    { __typename?: 'QueryPostsResponse' } & Pick<
      QueryPostsResponse,
      'hasMore'
    > & {
        posts?: Maybe<
          Array<Maybe<{ __typename?: 'Post' } & PostSnippetFragment>>
        >;
      }
  >;
};

export const PostSnippetFragmentDoc = gql`
  fragment PostSnippet on Post {
    id
    title
    textSnippet
    points
    creatorId
    createdAt
    creator {
      username
    }
  }
`;
export const UserBasicInfoFragmentDoc = gql`
  fragment UserBasicInfo on User {
    id
    username
    email
  }
`;
export const ChangePasswordDocument = gql`
  mutation ChangePassword($password: String!, $token: String!) {
    changePassword(password: $password, token: $token) {
      error {
        fieldName
        message
      }
      user {
        ...UserBasicInfo
      }
    }
  }
  ${UserBasicInfoFragmentDoc}
`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, baseOptions);
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const CreatePostDocument = gql`
  mutation CreatePost($title: String!, $text: String!) {
    createPost(title: $title, text: $text) {
      error {
        message
      }
      post {
        id
        title
        text
        creatorId
        points
        createdAt
        updatedAt
      }
    }
  }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    baseOptions
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const ForgetPasswordDocument = gql`
  mutation ForgetPassword($email: String!) {
    forgetPassword(email: $email)
  }
`;
export type ForgetPasswordMutationFn = Apollo.MutationFunction<
  ForgetPasswordMutation,
  ForgetPasswordMutationVariables
>;

/**
 * __useForgetPasswordMutation__
 *
 * To run a mutation, you first call `useForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetPasswordMutation, { data, loading, error }] = useForgetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgetPasswordMutation,
    ForgetPasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ForgetPasswordMutation,
    ForgetPasswordMutationVariables
  >(ForgetPasswordDocument, baseOptions);
}
export type ForgetPasswordMutationHookResult = ReturnType<
  typeof useForgetPasswordMutation
>;
export type ForgetPasswordMutationResult = Apollo.MutationResult<ForgetPasswordMutation>;
export type ForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgetPasswordMutation,
  ForgetPasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      error {
        fieldName
        message
      }
      user {
        ...UserBasicInfo
      }
    }
  }
  ${UserBasicInfoFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    baseOptions
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const AddUserDocument = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      error {
        fieldName
        message
      }
      user {
        ...UserBasicInfo
      }
    }
  }
  ${UserBasicInfoFragmentDoc}
`;
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >
) {
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    baseOptions
  );
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
export const UpvoteDocument = gql`
  mutation Upvote($postId: ID!, $point: Int!) {
    upvote(postId: $postId, point: $point)
  }
`;
export type UpvoteMutationFn = Apollo.MutationFunction<
  UpvoteMutation,
  UpvoteMutationVariables
>;

/**
 * __useUpvoteMutation__
 *
 * To run a mutation, you first call `useUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upvoteMutation, { data, loading, error }] = useUpvoteMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      point: // value for 'point'
 *   },
 * });
 */
export function useUpvoteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpvoteMutation,
    UpvoteMutationVariables
  >
) {
  return Apollo.useMutation<UpvoteMutation, UpvoteMutationVariables>(
    UpvoteDocument,
    baseOptions
  );
}
export type UpvoteMutationHookResult = ReturnType<typeof useUpvoteMutation>;
export type UpvoteMutationResult = Apollo.MutationResult<UpvoteMutation>;
export type UpvoteMutationOptions = Apollo.BaseMutationOptions<
  UpvoteMutation,
  UpvoteMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      ...UserBasicInfo
    }
  }
  ${UserBasicInfoFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostsDocument = gql`
  query Posts($limit: Int!, $cursor: String) {
    posts(limit: $limit, cursor: $cursor) {
      posts {
        ...PostSnippet
      }
      hasMore
    }
  }
  ${PostSnippetFragmentDoc}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    baseOptions
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    baseOptions
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
