import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { getRoutes } from 'src/routes';

import MainLayout from 'src/layouts/Main';

const Pages = () => (
  <MainLayout>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {getRoutes().map((item) => (
          <Route key={item.path} {...item} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </MainLayout>
);

export default Pages;
