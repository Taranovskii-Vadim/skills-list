import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { axiosInsatnce } from 'src/api';
import { RootState } from 'src/store/types';
import { resetToken } from 'src/store/auth/actions';

type Props = {
  children: ReactNode;
};

const RequireAuth = ({ children }: Props) => {
  const location = useLocation();
  // TODO add generic type
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.auth);

  const LoginForm = <Navigate replace to="/login" state={{ from: location }} />;

  axiosInsatnce.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;

      if (response.data.statusCode === 401) {
        localStorage.removeItem('token');

        dispatch(resetToken());

        return LoginForm;
      }

      return Promise.reject(error);
    },
  );

  if (!data) {
    return LoginForm;
  }

  return children;
};

export default RequireAuth;
