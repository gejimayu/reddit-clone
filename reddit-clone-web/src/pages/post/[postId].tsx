// HOCs
import withApollo from '../../hocs/withApollo';

// Hooks
import { usePostQuery, useMeQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

// Components
import Layout from '../../components/Layout';
import DeletePostButtons from '../../components/DeletePostButton';
import EditPostButtons from '../../components/EditPostButton';
import { Heading, Text, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';

const Post: React.FC = () => {
  const router = useRouter();
  const { data: userData } = useMeQuery();
  const { loading, data, error } = usePostQuery({
    variables: {
      postId: (router.query.postId as string) || '',
    },
  });

  if (loading || error || !data?.post) {
    return (
      <Layout>
        <Skeleton height="43px" />
        <SkeletonText marginTop="32px" noOfLines={10} spacing="16px" />
        <SkeletonText marginTop="32px" noOfLines={10} spacing="16px" />
      </Layout>
    );
  }

  const post = data.post;
  const userId = userData?.me?.id;

  return (
    <Layout>
      {post.creatorId === userId && (
        <Flex marginBottom="20px" justifyContent="flex-end">
          <EditPostButtons post={post} marginRight="15px" />
          <DeletePostButtons post={post} />
        </Flex>
      )}
      <Heading marginBottom="20px">{post.title}</Heading>
      <Text whiteSpace="pre-wrap" marginBottom="50px">
        {post.text}
      </Text>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
