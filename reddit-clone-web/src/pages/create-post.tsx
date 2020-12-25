import React from 'react';

// Hooks
import { useCreatePostMutation } from '../generated/graphql';
import { useRouter } from 'next/router';
import useIsLoggedIn from '../hooks/useIsLoggedIn';

// HOCs
import withApollo from '../hocs/withApollo';

// Components
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import TextArea from '../components/TextArea';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const CreatePost: React.FC = () => {
  useIsLoggedIn();
  const [createPost] = useCreatePostMutation();
  const router = useRouter();

  return (
    <Layout>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values) => {
          try {
            const response = await createPost({ variables: values });
            if (!response.errors) {
              router.push('/');
            }
          } catch (err) {
            if (err.message.startsWith('NotAuthenticated')) {
              router.replace('/login');
            }
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

export default withApollo()(CreatePost);
