import { Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { getRoutes } from 'src/routes';

import useProfile from 'src/store/profile';

import MainLayout from 'src/layouts/Main';

const Pages = () => {
  const { data, error, loading, fetchData } = useProfile();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>{error}...</div>;
  }

  return (
    <MainLayout profile={data}>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {getRoutes(data.role).map((item) => (
            <Route key={item.path} {...item} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default Pages;
