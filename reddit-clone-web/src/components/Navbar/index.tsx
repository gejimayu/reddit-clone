// Hooks
import { useMeQuery } from '../../generated/graphql';

// Components
import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar: React.FC = () => {
  const { data } = useMeQuery();
  return (
    <Box>
      <Flex padding="15px" justifyContent="flex-end">
        {data?.me ? (
          <>
            <Box marginRight="10px">{data.me.username}</Box>
            <Box>Logout</Box>
          </>
        ) : (
          <>
            <NextLink href="/login">
              <Link marginRight="10px">Login</Link>
            </NextLink>
            <NextLink href="/register">
              <Link>Register</Link>
            </NextLink>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
