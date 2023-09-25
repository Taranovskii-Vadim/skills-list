import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { RootState } from '../../store/types';

type Props = {
  children: ReactNode;
};

const RequireAuth = ({ children }: Props) => {
  const location = useLocation();
  const { data } = useSelector((state: RootState) => state.auth);

  if (!data) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
