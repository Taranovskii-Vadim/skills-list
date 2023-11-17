import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

// import Pages from './pages';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

import getTheme from './style';

const App = () => (
  <ThemeProvider theme={getTheme('light')}>
    <CssBaseline />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="*" element={<div>logged in</div>} />
      </Route>
    </Routes>
  </ThemeProvider>
);

export default App;
