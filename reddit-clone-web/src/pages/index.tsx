// Hooks
import { usePostsQuery, useMeQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Layout from '../components/Layout';
import CreateNewPostButton from '../components/CreateNewPostButton';
import UpvoteSection from '../components/UpvoteSection';
import DeletePostButtons from '../components/DeletePostButton';
import EditPostButtons from '../components/EditPostButton';
import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const PAGINATION_LIMIT = 10;

const Index: React.FC = () => {
  const { data: userData } = useMeQuery();
  const { data, loading, fetchMore } = usePostsQuery({
    variables: { limit: PAGINATION_LIMIT },
  });

  const posts = data?.posts?.posts || [];
  const hasMore = data?.posts?.hasMore;
  const userId = userData?.me?.id;

  return (
    <>
      <Layout>
        {!data && loading ? (
          <p>Loading ...</p>
        ) : posts ? (
          posts.map(
            (post) =>
              post && (
                <Stack marginY="30px" key={post.id}>
                  <Box padding={5} shadow="md" borderWidth="1px">
                    <Flex>
                      <UpvoteSection post={post} />
                      <Box marginLeft="15px" width="100%">
                        <NextLink href="post/[postId]" as={`/post/${post.id}`}>
                          <Link>
                            <Heading fontSize="xl">{post.title}</Heading>
                          </Link>
                        </NextLink>
                        <Text>Posted by {post.creator.username}</Text>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                          marginTop="16px"
                        >
                          <Text>{post.textSnippet}...</Text>
                          {post.creatorId === userId && (
                            <Flex>
                              <EditPostButtons post={post} marginRight="15px" />
                              <DeletePostButtons post={post} />
                            </Flex>
                          )}
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Stack>
              )
          )
        ) : null}
        {posts.length > 0 && hasMore && (
          <Flex>
            <Button
              onClick={() => {
                fetchMore({
                  variables: {
                    limit: PAGINATION_LIMIT,
                    cursor: posts[posts.length - 1]?.createdAt,
                  },
                });
              }}
              isLoading={loading}
              margin="10px auto 30px"
            >
              Load More
            </Button>
          </Flex>
        )}
      </Layout>
      <CreateNewPostButton />
    </>
  );
};

export default withApollo({ ssr: true })(Index);
