// Hooks
import { useMeQuery, useLogoutMutation } from '../../generated/graphql';

// Components
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar: React.FC = () => {
  const { data } = useMeQuery();
  const [logout, { client, loading: isLogoutLoading }] = useLogoutMutation();

  return (
    <Box>
      <Flex padding="15px" justifyContent="flex-end">
        {data?.me ? (
          <>
            <Box marginRight="10px">{data.me.username}</Box>
            <Button
              variant="link"
              onClick={async () => {
                await logout();
                client.resetStore();
              }}
              isLoading={isLogoutLoading}
            >
              Logout
            </Button>
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
