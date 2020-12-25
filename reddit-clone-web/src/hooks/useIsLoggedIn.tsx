import * as React from 'react';

// Hooks
import { useMeQuery } from '../generated/graphql';
import { useRouter } from 'next/router';

function useIsLoggedIn() {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !data?.me) {
      router.replace('/login');
    }
  }, [loading, data]);
}

export default useIsLoggedIn;
