import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

type Props = { label: string; children: ReactNode };

const ViewFormItem = ({ label, children }: Props) => (
  <Stack sx={{ mb: 3 }}>
    <Typography sx={{ mr: 2 }}>{label}:</Typography>
    {children}
  </Stack>
);

export default ViewFormItem;
