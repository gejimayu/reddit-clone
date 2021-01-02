// Hooks
import { useChangePasswordMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';

// HOC
import withApollo from '../../hocs/withApollo';

// Components
import FormContainer from '../../components/FormContainer';
import InputField from '../../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

// Utils
import * as Yup from 'yup';

enum FIELDS {
  NEW_PASSWORD = 'newPassword',
  CONFIRM_PASSWORD = 'confirmPassword',
}

const validationSchema = Yup.object().shape({
  [FIELDS.NEW_PASSWORD]: Yup.string().required('This field is required'),
  [FIELDS.CONFIRM_PASSWORD]: Yup.string()
    .oneOf([Yup.ref(FIELDS.NEW_PASSWORD)], 'Password must match')
    .required('This field is required'),
});

const ChangePassword: React.FC = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  return (
    <FormContainer>
      <Formik
        initialValues={{
          [FIELDS.NEW_PASSWORD]: '',
          [FIELDS.CONFIRM_PASSWORD]: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors }) => {
          const token = (router.query.token as string) || '';

          const response = await changePassword({
            variables: {
              password: values[FIELDS.NEW_PASSWORD],
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
              name={FIELDS.NEW_PASSWORD}
              label="New Password"
              type="password"
              placeholder="New Password"
              marginBottom="20px"
            />
            <InputField
              name={FIELDS.CONFIRM_PASSWORD}
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              marginBottom="20px"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default withApollo()(ChangePassword);
