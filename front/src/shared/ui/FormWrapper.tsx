import { ReactNode } from 'react';
import { Paper, Stack, Typography, Grid, Divider } from '@mui/material';

type Props = { children: ReactNode };

const FormWrapper = ({ children }: Props) => (
  <Paper sx={{ position: 'relative', p: 0, mb: 3 }}>
    <Stack alignItems="center" sx={{ p: 3 }}>
      <Typography variant="h6">Детальная информация</Typography>
    </Stack>
    <Divider />
    <Grid container spacing={3} sx={{ p: 3 }}>
      {children}
    </Grid>
  </Paper>
);

export default FormWrapper;
