import { useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import { Header } from '@widgets/header';
import { Sidebar } from '@widgets/sidebar';

import useProfile from '../model/store';

const RootLayout = () => {
  const { data, error, loading, fetchData } = useProfile();

  const { logout } = useOutletContext<{ logout: () => void }>();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data || error) {
    return <div>{error}...</div>;
  }

  return (
    <>
      <Header login={data.login} onLogout={logout} />
      <Sidebar>
        <Outlet context={{ role: data.role }} />
      </Sidebar>
    </>
  );
};

export default RootLayout;
