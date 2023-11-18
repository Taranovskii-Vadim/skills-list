import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { axiosInsatnce } from 'src/api';

import useAuth from 'src/store/auth';

const PrivateRoute = () => {
  const location = useLocation();
  const { data, logout } = useAuth();

  const LoginForm = <Navigate replace to="/login" state={{ from: location }} />;

  axiosInsatnce.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;

      if (response.data.statusCode === 401) {
        logout();

        return LoginForm;
      }

      return Promise.reject(error);
    },
  );

  return data ? <Outlet /> : LoginForm;
};

export default PrivateRoute;
