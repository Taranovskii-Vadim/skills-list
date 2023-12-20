import { AxiosError } from 'axios';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { axiosInsatnce } from '@shared/api';

import useAuth from '../model/store';

const PrivateRoute = () => {
  const location = useLocation();
  const { data, logout } = useAuth();

  const LoginForm = <Navigate to="/login" replace state={{ from: location }} />;

  axiosInsatnce.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === 401) {
        logout();

        return LoginForm;
      }

      return Promise.reject(error.message);
    },
  );

  return data ? <Outlet /> : LoginForm;
};

export default PrivateRoute;
