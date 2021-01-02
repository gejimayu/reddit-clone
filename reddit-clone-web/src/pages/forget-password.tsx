import React from 'react';

// Hooks
import { useForgetPasswordMutation } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import FormContainer from '../components/FormContainer';
import InputField from '../components/InputField';
import SuccessPrompt from '../components/SuccessPrompt';
import { Formik, Form } from 'formik';
import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

// Utils
import * as Yup from 'yup';

enum FIELDS {
  EMAIL = 'email',
}

const validationSchema = Yup.object().shape({
  [FIELDS.EMAIL]: Yup.string()
    .email('Please input a correct email address')
    .required('This field is required'),
});

const ForgetPassword: React.FC = () => {
  const [isComplete, setIsComplete] = React.useState<boolean>(false);
  const [forgetPassword] = useForgetPasswordMutation();

  return (
    <FormContainer>
      {!isComplete ? (
        <Formik
          initialValues={{ [FIELDS.EMAIL]: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await forgetPassword({ variables: values });
            setIsComplete(true);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name={FIELDS.EMAIL}
                label="Email"
                placeholder="Email"
                marginBottom="20px"
              />
              <Button type="submit" isLoading={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <SuccessPrompt
            title="Reset Password Success !"
            content="A verification email has been sent. Please check to proceed further"
          />
          <NextLink href="/">
            <Link display="block" textAlign="center">
              Go to home page
            </Link>
          </NextLink>
        </>
      )}
    </FormContainer>
  );
};

export default withApollo()(ForgetPassword);
