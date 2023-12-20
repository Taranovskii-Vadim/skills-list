import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import router from './routes';
import getTheme from './theme';

const App = () => (
  <ThemeProvider theme={getTheme('light')}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
