// Components
import { Box } from '@chakra-ui/react';

const Container: React.FC = ({ children }) => {
  return (
    <Box maxWidth="400px" marginX="auto" marginTop="50px" width="100%">
      {children}
    </Box>
  );
};

export default Container;
