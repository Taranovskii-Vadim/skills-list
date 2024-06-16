import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Rating, Button, Paper, Stack, Typography } from '@mui/material';

import { FormValues, useSkill } from '@entities/skill';
import { Input, Backdrop, DeclineButton } from '@shared/ui';

type Props = { id?: string };

const SubmitSkill = ({ id }: Props) => {
  const navigate = useNavigate();
  const { loading, createSkill } = useSkill();

  const { control, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: '', rate: 0, categoryId: 0 },
  });

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
        <Box sx={{ width: '50%' }}>
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
          {/* TODO change to dropdown later */}
          <Input
            required
            sx={{ mb: 0 }}
            name="categoryId"
            control={control}
            label="Id категории"
            error={errors.categoryId?.message}
          />
        </Box>
      </Paper>
      <Box>
        {/* TODO move as sep submitButton component */}
        <Button type="submit" variant="contained" sx={{ mr: 3 }}>
          {!id ? 'Создать' : 'Сохранить'}
        </Button>
        <DeclineButton onClick={handleDecline} />
      </Box>
    </Box>
  );
};

export default SubmitSkill;
