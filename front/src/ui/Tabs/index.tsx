import { useState, SyntheticEvent } from 'react';
import { Box, Tabs as MuiTabs, Tab } from '@mui/material';

import TabPanel from '../TabPanel';

interface Props {
  items: { label: string; node: JSX.Element }[];
}

const Tabs = ({ items }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
        <MuiTabs value={value} onChange={handleChange}>
          {items.map(({ label }) => (
            <Tab key={label} label={label} />
          ))}
        </MuiTabs>
      </Box>
      {items.map(({ label, node }, index) => (
        <TabPanel key={label} value={value} index={index}>
          {node}
        </TabPanel>
      ))}

      {/* <TabPanel value={value} index={0}>
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
      </TabPanel> */}
    </>
  );
};

export default Tabs;
