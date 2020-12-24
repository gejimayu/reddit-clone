// Hooks
import { useLoginMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <Container>
      <Formik
        initialValues={{ usernameOrEmail: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({ variables: values });
          const error = response.data?.login?.error;
          if (error) {
            if (error.fieldName === 'usernameOrEmail') {
              setErrors({ usernameOrEmail: error.message });
            } else if (error.fieldName === 'password') {
              setErrors({ password: error.message });
            }
          } else {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              label="Username or Email"
              placeholder="Username or Email"
              marginBottom="10px"
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              marginBottom="20px"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default withApollo()(Login);
