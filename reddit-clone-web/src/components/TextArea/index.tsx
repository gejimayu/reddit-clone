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
    rows: number;
  };

const TextArea: React.FC<Props> = ({
  name,
  label,
  placeholder,
  type,
  rows,
  ...formControlProps
}) => {
  const [field, { error, touched }] = useField(name);

  const showError = touched && !!error;
  return (
    <FormControl {...formControlProps} isInvalid={showError}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Textarea
        {...field}
        type={type}
        id={name}
        placeholder={placeholder}
        rows={rows}
      />
      {showError && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextArea;
