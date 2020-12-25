// Hooks
import { usePostsQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Navbar from '../components/Navbar';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Index: React.FC = () => {
  const { data, loading } = usePostsQuery();

  return (
    <>
      <Navbar />
      <NextLink href="/create-post">
        <Link>Create Post</Link>
      </NextLink>
      {loading ? (
        <p>Loading ...</p>
      ) : data?.posts ? (
        data.posts.map((post) => post && <p key={post.id}>{post.title}</p>)
      ) : null}
    </>
  );
};

export default withApollo({ ssr: true })(Index);
