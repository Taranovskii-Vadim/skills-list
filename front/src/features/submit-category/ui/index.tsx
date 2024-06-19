import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormValues, useCategory } from '@entities/category';
import { Backdrop, DeclineButton, FormWrapper, Input, SubmitButton, Textarea } from '@shared/ui';

type Props = { id?: string };

const CategorySubmitForm = ({ id }: Props) => {
  const navigate = useNavigate();

  const { control, formState, setValue, handleSubmit } = useForm<FormValues>();
  const { data, loading, fetchData, editCategory, createCategory } = useCategory();

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  useEffect(() => {
    if (id && data) {
      setValue('name', data.name);
      setValue('description', data.description);
    }
  }, [id, data]);

  const { errors } = formState;

  const handleDecline = () => navigate(`/categories${id ? `/${id}` : ''}`);

  const handleSubmitCategoryData: SubmitHandler<FormValues> = (result) => {
    const handler = id ? editCategory.bind(null, id) : createCategory;

    handler(result, handleDecline);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitCategoryData)}>
      <FormWrapper>
        <Backdrop open={loading} />
        <Grid item xs={12} md={6}>
          <Input
            required
            name="name"
            maxLength={40}
            control={control}
            label="Наименование"
            error={errors.name?.message}
          />
          <Textarea name="description" control={control} label="Описание" />
        </Grid>
      </FormWrapper>
      <Box>
        <SubmitButton isNew={!id} />
        <DeclineButton onClick={handleDecline} />
      </Box>
    </Box>
  );
};

export default CategorySubmitForm;
