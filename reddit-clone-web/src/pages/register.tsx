// Hooks
import { useAddUserMutation } from '../generated/graphql';

// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const Register: React.FC = () => {
  const [register, {}] = useAddUserMutation();

  return (
    <Container>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          const repsonse = await register({ variables: values });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="Username"
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
