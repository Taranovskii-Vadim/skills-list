import { Outlet, createBrowserRouter } from 'react-router-dom';

import { LoginPage, PrivateRoute } from '@pages/login';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: (
          <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <header>this is test app header</header>
            <Outlet />
          </div>
        ),
        children: [
          { path: '/', element: <div>dashboard</div> },

          { path: '/skills', element: <div>skills</div> },
          { path: '/skills/new', element: <div>new skill</div> },
          { path: '/skills/:id', element: <div>skill view</div> },

          { path: '/categories', element: <div>categories</div> },
          { path: '/categories/new', element: <div>new category</div> },
          { path: '/categories/:id', element: <div>category view</div> },
        ],
      },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]);

export default router;
