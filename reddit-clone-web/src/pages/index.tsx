// Hooks
import { usePostsQuery } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Navbar from '../components/Navbar';

const Index: React.FC = () => {
  const { data, loading } = usePostsQuery();

  return (
    <>
      <Navbar />
      <p>Home Page</p>
      {loading ? (
        <p>Loading ...</p>
      ) : data?.posts ? (
        data.posts.map((post) => post && <p key={post.id}>{post.title}</p>)
      ) : null}
    </>
  );
};

export default withApollo({ ssr: true })(Index);
