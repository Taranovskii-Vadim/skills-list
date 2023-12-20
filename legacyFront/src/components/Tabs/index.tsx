import { useState, SyntheticEvent } from 'react';
import { Box, Tabs as MuiTabs, Tab } from '@mui/material';

import AddForm from '../AddForm';
import TabPanel from 'src/ui/TabPanel';

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
      <AddForm id={value + 1} />
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
    </>
  );
};

export default Tabs;
