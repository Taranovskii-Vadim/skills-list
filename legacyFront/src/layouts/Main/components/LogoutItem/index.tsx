import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from 'src/store/auth';

const LogoutItem = () => {
  const location = useLocation();
  const { data, logout } = useAuth();

  if (!data) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }

  return (
    <MenuItem onClick={() => logout()}>
      <Typography textAlign="center">Выйти</Typography>
    </MenuItem>
  );
};

export default LogoutItem;
