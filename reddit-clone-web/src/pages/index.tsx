// Hooks
import { usePostsQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Layout from '../components/Layout';
import CreateNewPostButton from '../components/CreateNewPostButton';
import UpvoteSection from '../components/UpvoteSection';
import { Stack, Box, Heading, Text, Button, Flex } from '@chakra-ui/react';

const PAGINATION_LIMIT = 10;

const Index: React.FC = () => {
  const { data, loading, fetchMore } = usePostsQuery({
    variables: { limit: PAGINATION_LIMIT },
  });

  const posts = data?.posts?.posts || [];
  const hasMore = data?.posts?.hasMore;

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
                      <Box marginLeft="15px">
                        <Heading fontSize="xl">{post.title}</Heading>
                        <Text>Posted by {post.creator.username}</Text>
                        <Text marginTop="16px">{post.textSnippet}...</Text>
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
