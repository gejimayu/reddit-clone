import React from 'react';

// Hooks
import { useForgetPasswordMutation } from '../generated/graphql';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import SuccessPrompt from '../components/SuccessPrompt';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const ForgetPassword: React.FC = () => {
  const [isComplete, setIsComplete] = React.useState<boolean>(false);
  const [forgetPassword] = useForgetPasswordMutation();

  return (
    <Container variant="small">
      {!isComplete ? (
        <Formik
          initialValues={{ email: '' }}
          onSubmit={async (values) => {
            await forgetPassword({ variables: values });
            setIsComplete(true);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="email"
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
        <SuccessPrompt
          title="Reset Password Success !"
          content="A verification email has been sent. Please check to proceed further"
        />
      )}
    </Container>
  );
};

export default withApollo()(ForgetPassword);
