// Hooks
import { Post, usePostsQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Layout from '../components/Layout';
import {
  Link,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const MAX_TEXT_LEN = 100;
const PAGINATION_LIMIT = 10;

const Index: React.FC = () => {
  const { data, loading, fetchMore } = usePostsQuery({
    variables: { limit: PAGINATION_LIMIT },
  });

  const posts = data?.posts?.posts || [];
  const hasMore = data?.posts?.hasMore;

  return (
    <Layout>
      <NextLink href="/create-post">
        <Link>Create Post</Link>
      </NextLink>
      {!data && loading ? (
        <p>Loading ...</p>
      ) : posts ? (
        posts.map((post) => (
          <Stack marginY="30px">
            <Box padding={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post?.title}</Heading>
              <Text>Posted by {post?.creator.username}</Text>
              <Text marginTop="16px">
                {post?.text.slice(0, MAX_TEXT_LEN)}.....
              </Text>
            </Box>
          </Stack>
        ))
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
  );
};

export default withApollo({ ssr: true })(Index);
