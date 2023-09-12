import { useState, SyntheticEvent } from 'react';
import { ThemeProvider, CssBaseline, Grid, Box, Tabs, Tab, Paper, Typography, Rating } from '@mui/material';

import getTheme from './style';
import TabPanel from './ui/TabPanel';
import Header from './components/Header';

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={getTheme('light')}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ m: 0, width: '100%', pr: 3 }}>
        <Grid item xs={8} sx={{ pt: 0 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
            {/* TODO create tabs ui component */}
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Frontend" />
              <Tab label="Backend" />
              <Tab label="Database" />
              <Tab label="Общие" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography>JavaScript</Typography>
              <Rating defaultValue={2.5} />
            </Paper>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>TypeScript</Typography>
              <Rating defaultValue={5} />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Backend
          </TabPanel>
          <TabPanel value={value} index={2}>
            Database
          </TabPanel>
          <TabPanel value={value} index={3}>
            Common
          </TabPanel>
        </Grid>
        <Grid item xs={4} sx={{ pt: 0 }}>
          <Paper>block for skills charts 1</Paper>
          <Paper sx={{ mt: 3 }}>block for skills charts 2</Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
