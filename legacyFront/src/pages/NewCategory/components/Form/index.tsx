import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { getPathTo } from "src/routes";
import useCategory from "src/store/category";
import { FormValues } from "src/store/category/types";

import Backdrop from "src/ui/Backdrop";

const Form = () => {
  const navigate = useNavigate();
  const { loading, createCategory } = useCategory();

  const { control, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: "", description: "" },
  });
  const { errors } = formState;

  const handleMoveToCategories = () => navigate(getPathTo("categories"));

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    createCategory(values, handleMoveToCategories);
  };

  return (
    <>
      <Paper sx={{ position: "relative", p: 3 }}>
        <Backdrop open={loading} />
        <Box sx={{ width: "50%" }}>
          <Controller
            name="name"
            control={control}
            disabled={loading}
            rules={{
              required: "Поле обязательно к заполнению",
              maxLength: {
                value: 40,
                message: "Длина строки должна быть не больше 40 символов",
              },
            }}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 3 }}
                label="Наименование"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            disabled={loading}
            render={({ field }) => (
              <TextField
                multiline
                fullWidth
                rows={4}
                size="small"
                label="Описание"
                {...field}
              />
            )}
          />
        </Box>
      </Paper>
      {/* TODO move to sep footer component */}
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          disabled={loading}
          onClick={() => handleSubmit(onSubmit)()}
          sx={{ mr: 3 }}
        >
          Создать
        </Button>
        <Button
          variant="outlined"
          onClick={handleMoveToCategories}
          disabled={loading}
        >
          Отмена
        </Button>
      </Box>
    </>
  );
};

export default Form;
