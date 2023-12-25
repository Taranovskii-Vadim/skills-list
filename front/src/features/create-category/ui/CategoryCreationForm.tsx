import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Backdrop } from '@shared/ui/mui';
import { Input, Textarea } from '@shared/ui/form';

import { FormValues, useCreateCategory } from '@entities/category';

const CategoryCreationForm = () => {
  const navigate = useNavigate();
  const { loading, createCategory } = useCreateCategory();
  const { control, formState, handleSubmit } = useForm<FormValues>({ defaultValues: { name: '', description: '' } });

  const { errors } = formState;

  // TODO maybe create utils for navigation???
  const handleMoveToCategories = () => navigate('/categories');

  const onSubmit: SubmitHandler<FormValues> = (result) => {
    createCategory(result, handleMoveToCategories);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ position: 'relative', p: 3 }}>
        <Backdrop open={loading} />
        <Box sx={{ width: '50%' }}>
          <Input
            required
            name="name"
            maxLength={40}
            control={control}
            label="Наименование"
            error={errors.name?.message}
          />
          <Textarea name="description" control={control} label="Описание" />
        </Box>
      </Paper>
      <Box sx={{ mt: 3 }}>
        <Button type="submit" variant="contained" sx={{ mr: 3 }}>
          Создать
        </Button>
        <Button variant="outlined" onClick={handleMoveToCategories}>
          Отмена
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryCreationForm;
