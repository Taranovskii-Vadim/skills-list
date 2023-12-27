import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = { title: string; children?: ReactNode };

const PageHeader = ({ title, children }: Props) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
    <Typography variant="h4">{title}</Typography>
    <Stack direction="row" alignItems="center">
      {children}
    </Stack>
  </Stack>
);

export default PageHeader;
