// Hooks
import { useField } from 'formik';

// Components
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';

// Types
import { FormControlProps } from '@chakra-ui/react';

type Props = React.HTMLProps<HTMLInputElement> &
  FormControlProps & {
    name: string;
    label: string;
    placeholder: string;
  };

const TextArea: React.FC<Props> = ({
  name,
  label,
  placeholder,
  type,
  ...formControlProps
}) => {
  const [field, { error }] = useField(name);

  return (
    <FormControl {...formControlProps} isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Textarea {...field} type={type} id={name} placeholder={placeholder} />
      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextArea;
