import { ThemeProvider, CssBaseline, Grid } from '@mui/material';

import getTheme from './style';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ m: 0, width: '100%', pr: 3 }}>
        <Grid item xs={8} sx={{ pt: 0 }}>
          block for skills list
        </Grid>
        <Grid item xs={4} sx={{ pt: 0 }}>
          block for skills charts
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
