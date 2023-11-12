import { ThemeProvider, CssBaseline, Typography } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

import getTheme from './style';
import MainLayout from './layouts/Main';

const App = () => (
  <ThemeProvider theme={getTheme('light')}>
    <CssBaseline />
    <MainLayout>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
        velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
        lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
        ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
    </MainLayout>
    {/* <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes> */}
  </ThemeProvider>
);

export default App;
