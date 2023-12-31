import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Backdrop } from '@shared/ui/mui';
import { Input, Textarea } from '@shared/ui/form';

import { FormValues, useCategory } from '@entities/category';

type Props = {
  id?: string;
  mode: 'new' | 'edit';
};

const CategorySubmitForm = ({ id, mode }: Props) => {
  const navigate = useNavigate();
  const { data, loading, editCategory, createCategory } = useCategory();

  const { control, formState, setValue, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('description', data.description);
    }
  }, [data]);

  const { errors } = formState;

  // TODO maybe create utils for navigation???
  const handleDecline = () => navigate(`/categories${mode === 'edit' && id ? `/${id}` : ''}`);

  const handleSubmitCategoryData: SubmitHandler<FormValues> = (result) => {
    const handler = mode === 'edit' && id ? editCategory.bind(null, id) : createCategory;

    handler(result, handleDecline);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitCategoryData)}>
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
          {mode === 'new' ? 'Создать' : 'Сохранить'}
        </Button>
        <Button variant="outlined" onClick={handleDecline}>
          Отмена
        </Button>
      </Box>
    </Box>
  );
};

export default CategorySubmitForm;
