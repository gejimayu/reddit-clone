// Hooks
import { useLoginMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import FormContainer from '../components/FormContainer';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

// Utils
import * as Yup from 'yup';

enum FIELDS {
  USERNAME_OR_EMAIL = 'usernameOrEmail',
  PASSWORD = 'password',
}

const validationSchema = Yup.object().shape({
  [FIELDS.USERNAME_OR_EMAIL]: Yup.string().required('This field is required'),
  [FIELDS.PASSWORD]: Yup.string().required('This field is required'),
});

const Login: React.FC = () => {
  const [login, { client }] = useLoginMutation();
  const router = useRouter();

  return (
    <FormContainer>
      <Formik
        initialValues={{
          [FIELDS.USERNAME_OR_EMAIL]: '',
          [FIELDS.PASSWORD]: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({ variables: values });
          const error = response.data?.login?.error;
          if (error) {
            if (error.fieldName === FIELDS.USERNAME_OR_EMAIL) {
              setErrors({ [FIELDS.USERNAME_OR_EMAIL]: error.message });
            } else if (error.fieldName === FIELDS.PASSWORD) {
              setErrors({ [FIELDS.PASSWORD]: error.message });
            }
          } else {
            client.resetStore();
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
              name={FIELDS.USERNAME_OR_EMAIL}
              label="Username or Email"
              placeholder="Username or Email"
              marginBottom="10px"
            />
            <InputField
              name={FIELDS.PASSWORD}
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
    </FormContainer>
  );
};

export default withApollo()(Login);
