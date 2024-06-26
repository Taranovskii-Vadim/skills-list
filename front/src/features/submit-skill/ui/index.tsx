import { useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Rating, Grid } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { FormValues, useSkill } from '@entities/skill';
import {
  Input,
  Backdrop,
  DeclineButton,
  SubmitButton,
  Dropdown,
  FormWrapper,
  ViewFormItem,
  UploadImage,
} from '@shared/ui';

type Props = { id?: string };

const SubmitSkill = ({ id }: Props) => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState<File>();
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

  const handleSetLogo = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.files![0];
    if (!value.type.startsWith('image/')) return;

    setLogo(value);
  };

  const handleSubmitCategoryData: SubmitHandler<FormValues> = (result) => {
    // const handler = id ? editCategory.bind(null, id) : createCategory;

    // handler(result, handleDecline);

    createSkill({ logo, ...result }, () => navigate('/skills'));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitCategoryData)}>
      <FormWrapper>
        <Backdrop open={loading} />
        <Grid item xs={12} md={6}>
          <ViewFormItem label="Уровень владения">
            {/* TODO type warnings we get string but expect number */}
            <Controller name="rate" control={control} render={({ field }) => <Rating max={10} {...field} />} />
          </ViewFormItem>
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
        </Grid>
        <Grid item xs={12} md={6}>
          {/* TODO think about better ux solution */}
          <UploadImage file={logo} onSetFile={handleSetLogo} />
        </Grid>
      </FormWrapper>
      <Box>
        <SubmitButton isNew={!id} />
        <DeclineButton onClick={handleDecline} />
      </Box>
    </Box>
  );
};

export default SubmitSkill;
