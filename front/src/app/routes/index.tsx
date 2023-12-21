import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@pages/root';
import { CategoriesPage } from '@pages/categories';
import { LoginPage, PrivateRoute } from '@pages/login';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: '/', element: <div>dashboard</div> },

          { path: '/skills', element: <div>skills</div> },
          { path: '/skills/new', element: <div>new skill</div> },
          { path: '/skills/:id', element: <div>skill view</div> },

          { path: '/categories', element: <CategoriesPage /> },
          { path: '/categories/new', element: <div>new category</div> },
          { path: '/categories/:id', element: <div>category view</div> },

          { path: '*', element: <div>not found page...</div> },
        ],
      },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
