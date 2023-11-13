import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { getRoutes } from 'src/routes';
import { RootState } from 'src/store/types';
import { fetchProfile } from 'src/store/profile/actions';

import MainLayout from 'src/layouts/Main';

const Pages = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
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
