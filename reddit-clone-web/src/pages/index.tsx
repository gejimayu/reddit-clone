// Hooks
import { usePostsQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Layout from '../components/Layout';
import UpvoteSection from '../components/UpvoteSection';
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
        posts.map(
          (post) =>
            post && (
              <Stack marginY="30px" key={post.id}>
                <Box padding={5} shadow="md" borderWidth="1px">
                  <Flex>
                    <UpvoteSection post={post} />
                    <Box marginLeft="15px">
                      <Heading fontSize="xl">{post.title}</Heading>
                      <Text>Posted by {post.creator.username}</Text>
                      <Text marginTop="16px">{post.textSnippet}.....</Text>
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
  );
};

export default withApollo({ ssr: true })(Index);
