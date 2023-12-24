import { Box, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Backdrop } from '@shared/ui/mui';
import { FormValues } from '@entities/category';

const CategoryCreationForm = () => {
  const {} = useForm<FormValues>({ defaultValues: { name: '', description: '' } });

  return (
    <Box component="form">
      <Paper sx={{ position: 'relative', p: 3 }}>
        <Backdrop open={false} />
      </Paper>
    </Box>
  );
};

export default CategoryCreationForm;
