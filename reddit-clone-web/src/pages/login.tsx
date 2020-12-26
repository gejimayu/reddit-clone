// Hooks
import { useLoginMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

  return (
    <Container variant="small">
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
            if (router.query.next) {
              router.push(router.query.next as string);
            } else {
              router.push('/');
            }
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
              marginBottom="10px"
            />
            <Flex marginBottom="10px">
              <NextLink href="/forget-password">
                <Link marginLeft="auto">Forget Password?</Link>
              </NextLink>
            </Flex>
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
