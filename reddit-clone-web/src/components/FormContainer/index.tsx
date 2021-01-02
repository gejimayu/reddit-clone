// Components
import Container from '../Container';
import { Box } from '@chakra-ui/react';

const FormContainer: React.FC = ({ children }) => {
  return (
    <Container variant="small">
      <Box
        width="100%"
        marginX="auto"
        marginTop="25vh"
        padding="35px"
        border="1px solid rgba(0, 0, 0, 0.15)"
        borderRadius="10px"
      >
        {children}
      </Box>
    </Container>
  );
};

export default FormContainer;
