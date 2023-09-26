import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { axiosInsatnce } from 'src/api';
import { RootState } from 'src/store/types';
import { resetToken } from 'src/store/auth/actions';

const PrivateRoute = () => {
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

  return data ? <Outlet /> : LoginForm;
};

export default PrivateRoute;
