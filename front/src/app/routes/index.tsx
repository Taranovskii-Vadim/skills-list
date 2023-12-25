import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@pages/root';
import { NewCategory } from '@pages/new-category';
import { CategoriesPage } from '@pages/categories';
import { ViewCategory } from '@pages/view-category';
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
          { path: '/categories/new', element: <NewCategory /> },
          { path: '/categories/:id', element: <ViewCategory /> },

          { path: '*', element: <div>not found page...</div> },
        ],
      },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
