// Components
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

type Props = {
  title: string;
  content: React.ReactNode;
};
const SuccessPrompt: React.FC<Props> = ({ title, content }) => {
  return (
    <Alert
      backgroundColor="white"
      status="success"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon boxSize="40px" />
      <AlertTitle marginTop="16px" marginBottom="4px" fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
};

export default SuccessPrompt;
