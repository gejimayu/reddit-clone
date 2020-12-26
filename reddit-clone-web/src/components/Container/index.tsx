// Components
import { Box } from '@chakra-ui/react';

const VARIANT = {
  small: '400px',
  large: '1000px',
};

type Props = {
  variant?: 'small' | 'large';
};
const Container: React.FC<Props> = ({ variant = 'large', children }) => {
  return (
    <Box
      maxWidth={VARIANT[variant]}
      marginX="auto"
      marginTop="50px"
      paddingX="15px"
      width="100%"
    >
      {children}
    </Box>
  );
};

export default Container;
