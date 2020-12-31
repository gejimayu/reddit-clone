// Hooks
import { useMeQuery, useLogoutMutation } from '../../generated/graphql';

// Components
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const { data } = useMeQuery({
    ssr: false,
  });
  const [logout, { client, loading: isLogoutLoading }] = useLogoutMutation();

  return (
    <Box className={styles.navbarContainer} zIndex="navbar">
      <Flex
        padding="10px 25px"
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/">
          <Link className={styles.logoLink}>
            <Image src="/logo.png" alt="logo" width={36} height={36} />
            <h1 className={styles.logoText}>This is Not Reddit</h1>
          </Link>
        </NextLink>
        <Flex>
          {data?.me ? (
            <>
              <Box marginRight="20px">{data.me.username}</Box>
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
                <Link marginRight="20px">Login</Link>
              </NextLink>
              <NextLink href="/register">
                <Link>Register</Link>
              </NextLink>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
