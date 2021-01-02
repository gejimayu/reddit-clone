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
import { Button, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

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
        initialValues={{
          [FIELDS.TITLE]: data.post.title,
          [FIELDS.TEXT]: data.post.text,
        }}
        validationSchema={validationSchema}
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
              Edit Post
            </Button>
            <Button
              colorScheme="red"
              marginLeft="10px"
              isLoading={isSubmitting}
              onClick={() => {
                router.back();
              }}
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo()(EditPost);
