import { createBrowserRouter } from 'react-router-dom';

import { Skills } from '@pages/skills';
import { RootLayout } from '@pages/root';
import { NewCategory } from '@pages/new-category';
import { CategoriesPage } from '@pages/categories';
import { ViewCategory } from '@pages/view-category';
import { EditCategory } from '@pages/edit-category';
import { LoginPage, PrivateRoute } from '@pages/login';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: '/', element: <div>dashboard</div> },

          { path: '/skills', element: <Skills /> },
          { path: '/skills/new', element: <div>new skill</div> },
          { path: '/skills/:id', element: <div>skill view</div> },

          { path: '/categories', element: <CategoriesPage /> },
          { path: '/categories/new', element: <NewCategory /> },
          { path: '/categories/:id', element: <ViewCategory /> },
          { path: '/categories/edit/:id', element: <EditCategory /> },

          { path: '*', element: <div>not found page...</div> },
        ],
      },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
