// Hooks
import { useAddUserMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

// HOC
import withApollo from '../hocs/withApollo';

// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

// Utils
import * as Yup from 'yup';

enum FIELDS {
  USERNAME = 'username',
  EMAIL = 'email',
  PASSWORD = 'password',
}

const validationSchema = Yup.object().shape({
  [FIELDS.USERNAME]: Yup.string()
    .min(5, `Minimum 5 characters`)
    .max(100, `Maximum 100 characters`)
    .required('This field is required'),
  [FIELDS.EMAIL]: Yup.string()
    .email('Please enter a correct email')
    .required('This field is required'),
  [FIELDS.PASSWORD]: Yup.string().required('This field is required'),
});

const Register: React.FC = () => {
  const [register, { client }] = useAddUserMutation({
    update(cache) {
      cache.evict({ id: 'ROOT_QUERY', fieldName: 'me' });
    },
  });
  const router = useRouter();

  return (
    <Container variant="small">
      <Formik
        initialValues={{
          [FIELDS.USERNAME]: '',
          [FIELDS.EMAIL]: '',
          [FIELDS.PASSWORD]: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ variables: values });
          const error = response.data?.addUser?.error;
          if (error) {
            if (error.fieldName === FIELDS.USERNAME) {
              setErrors({ [FIELDS.USERNAME]: error.message });
            } else if (error.fieldName === FIELDS.EMAIL) {
              setErrors({ [FIELDS.EMAIL]: error.message });
            }
          } else {
            client.resetStore();
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name={FIELDS.USERNAME}
              label="Username"
              placeholder="Username"
              marginBottom="10px"
            />
            <InputField
              name={FIELDS.EMAIL}
              label="Email"
              placeholder="Email"
              marginBottom="10px"
              type="email"
            />
            <InputField
              name={FIELDS.PASSWORD}
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

export default withApollo()(Register);
