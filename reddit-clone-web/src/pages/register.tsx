// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const Register: React.FC = () => {
  return (
    <Container>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
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
