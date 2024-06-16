import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormValues, useCategory } from '@entities/category';
import { Backdrop, DeclineButton, Input, SubmitButton, Textarea } from '@shared/ui';

type Props = { id?: string };

const CategorySubmitForm = ({ id }: Props) => {
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

  const handleDecline = () => navigate(`/categories${id ? `/${id}` : ''}`);

  const handleSubmitCategoryData: SubmitHandler<FormValues> = (result) => {
    const handler = id ? editCategory.bind(null, id) : createCategory;

    handler(result, handleDecline);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitCategoryData)}>
      <Paper sx={{ position: 'relative', p: 3, mb: 3 }}>
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
      <Box>
        <SubmitButton isNew={!id} />
        <DeclineButton onClick={handleDecline} />
      </Box>
    </Box>
  );
};

export default CategorySubmitForm;
