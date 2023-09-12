import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  index: number;
  value: number;
  children?: ReactNode;
}

const TabPanel = ({ index, value, children }: Props) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
  </div>
);

export default TabPanel;
