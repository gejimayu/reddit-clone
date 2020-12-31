// HOCs
import withApollo from '../../hocs/withApollo';

// Hooks
import { usePostQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

// Components
import Layout from '../../components/Layout';

const Post: React.FC = () => {
  const router = useRouter();
  const { loading, data, error } = usePostQuery({
    variables: {
      postId: (router.query.postId as string) || '',
    },
  });

  if (loading) {
    return <p>Loading ....</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data?.post) {
    return <p>Post not found</p>;
  }

  const post = data.post;
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
