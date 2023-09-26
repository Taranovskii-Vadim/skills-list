import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

import getTheme from './style';

const App = () => (
  <ThemeProvider theme={getTheme('light')}>
    <CssBaseline />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </ThemeProvider>
);

export default App;
