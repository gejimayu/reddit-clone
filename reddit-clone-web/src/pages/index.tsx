// Hooks
import { usePostsQuery, useMeQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Layout from '../components/Layout';
import CreateNewPostButton from '../components/CreateNewPostButton';
import PostCard from '../components/PostCard';
import PostCardSkeleton from '../components/PostCard/skeleton';
import { Stack, Box, Button, Flex } from '@chakra-ui/react';

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
        {loading
          ? [1, 2, 3, 4, 5].map((i) => (
              <Stack marginY="30px" key={i}>
                <Box padding={5} shadow="md" borderWidth="1px">
                  <PostCardSkeleton />
                </Box>
              </Stack>
            ))
          : posts
          ? posts.map(
              (post) =>
                post && (
                  <Stack marginY="30px" key={post.id}>
                    <Box padding={5} shadow="md" borderWidth="1px">
                      <PostCard
                        post={post}
                        showEditDeleteButton={post.creatorId === userId}
                      />
                    </Box>
                  </Stack>
                )
            )
          : null}
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
