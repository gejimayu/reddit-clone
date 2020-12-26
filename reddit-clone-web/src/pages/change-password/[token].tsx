// Hooks
import { useChangePasswordMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';

// HOC
import withApollo from '../../hocs/withApollo';

// Components
import Container from '../../components/Container';
import InputField from '../../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const ChangePassword: React.FC = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  return (
    <Container variant="small">
      <Formik
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, { setErrors }) => {
          const token = (router.query.token as string) || '';

          const response = await changePassword({
            variables: {
              password: values.newPassword,
              token,
            },
          });
          const error = response.data?.changePassword?.error;
          if (error) {
            setErrors({ newPassword: error.message });
          } else {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="New Password"
              marginBottom="20px"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default withApollo()(ChangePassword);
