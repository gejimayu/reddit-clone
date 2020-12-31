import React from 'react';

// Hooks
import {
  useUpdatePostMutation,
  usePostQuery,
} from '../../../generated/graphql';
import { useRouter } from 'next/router';
import useIsLoggedIn from '../../../hooks/useIsLoggedIn';

// HOCs
import withApollo from '../../../hocs/withApollo';

// Components
import Layout from '../../../components/Layout';
import InputField from '../../../components/InputField';
import TextArea from '../../../components/TextArea';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const EditPost: React.FC = () => {
  useIsLoggedIn();
  const router = useRouter();
  const postId = router.query.postId as string;

  const { data, loading } = usePostQuery({ variables: { postId } });
  const [updatePost] = useUpdatePostMutation();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data?.post) {
    return <p>could not find post</p>;
  }

  return (
    <Layout>
      <Formik
        initialValues={{ title: data.post.title, text: data.post.text }}
        onSubmit={async (values) => {
          const response = await updatePost({
            variables: { ...values, id: router.query.postId as string },
          });
          if (!response.errors) {
            router.back();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="title"
              label="Title"
              placeholder="Title"
              marginBottom="10px"
            />
            <TextArea
              name="text"
              label="Body"
              placeholder="Anything in your mind ?"
              marginBottom="20px"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Create Post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo()(EditPost);
