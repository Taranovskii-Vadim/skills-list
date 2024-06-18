import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Rating, Paper, Stack, Typography } from '@mui/material';

import { FormValues, useSkill } from '@entities/skill';
import { Input, Backdrop, DeclineButton, SubmitButton, Dropdown } from '@shared/ui';

type Props = { id?: string };

const SubmitSkill = ({ id }: Props) => {
  const navigate = useNavigate();
  const { loading, categories, initForm, createSkill } = useSkill();

  const { control, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: '', rate: 0, categoryId: undefined },
  });

  useEffect(() => {
    initForm();
  }, []);

  //   useEffect(() => {
  //     if (data) {
  //       setValue('name', data.name);
  //       setValue('description', data.description);
  //     }
  //   }, [data]);

  const { errors } = formState;

  const handleDecline = () => navigate(`/categories${id ? `/${id}` : ''}`);

  const handleSubmitCategoryData: SubmitHandler<FormValues> = (result) => {
    // const handler = id ? editCategory.bind(null, id) : createCategory;

    // handler(result, handleDecline);

    createSkill(result, () => navigate('/skills'));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitCategoryData)}>
      <Paper sx={{ position: 'relative', p: 3, mb: 3 }}>
        <Backdrop open={loading} />
        {/* TODO better use grid here and in submit category */}
        <Box sx={{ width: '75%' }}>
          {/* TODO move as universal sep component */}
          <Stack sx={{ mb: 3 }}>
            <Typography sx={{ mr: 2 }}>Уровень владения:</Typography>
            {/* TODO type warnings we get string but expect number */}
            <Controller name="rate" control={control} render={({ field }) => <Rating max={10} {...field} />} />
          </Stack>
          <Input
            required
            name="name"
            maxLength={40}
            control={control}
            label="Наименование"
            error={errors.name?.message}
          />
          <Dropdown
            required
            sx={{ mb: 0 }}
            control={control}
            name="categoryId"
            options={categories}
            label="Id категории"
            error={errors.categoryId?.message}
          />
        </Box>
      </Paper>
      <Box>
        <SubmitButton isNew={!id} />
        <DeclineButton onClick={handleDecline} />
      </Box>
    </Box>
  );
};

export default SubmitSkill;
