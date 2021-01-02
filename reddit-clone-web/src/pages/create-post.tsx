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

// Utils
import * as Yup from 'yup';

enum FIELDS {
  TITLE = 'title',
  TEXT = 'text',
}

const validationSchema = Yup.object().shape({
  [FIELDS.TITLE]: Yup.string()
    .min(5, `Minimum 5 characters`)
    .max(100, `Maximum 100 characters`)
    .required('This field is required'),
  [FIELDS.TEXT]: Yup.string()
    .min(50, `Minimum 50 characters`)
    .required('This field is required'),
});

const CreatePost: React.FC = () => {
  useIsLoggedIn();
  const [createPost] = useCreatePostMutation({
    update(cache) {
      cache.evict({ id: 'ROOT_QUERY', fieldName: 'posts' });
    },
  });
  const router = useRouter();

  return (
    <Layout>
      <Formik
        initialValues={{ [FIELDS.TITLE]: '', [FIELDS.TEXT]: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const response = await createPost({ variables: values });
            if (!response.errors) {
              const postId = response.data?.createPost?.post?.id;
              router.push(`/post/${postId}`);
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
              name={FIELDS.TITLE}
              label="Title"
              placeholder="Title"
              marginBottom="10px"
            />
            <TextArea
              name={FIELDS.TEXT}
              label="Body"
              placeholder="Anything in your mind ?"
              marginBottom="20px"
              rows={15}
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
