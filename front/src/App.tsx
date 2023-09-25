import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';

import getTheme from './style';

const App = () => (
  <ThemeProvider theme={getTheme('light')}>
    <CssBaseline />
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </ThemeProvider>
);

export default App;
