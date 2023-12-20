import { Navigate, useLocation } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import useAuth from 'src/store/auth';
import { FormValues } from 'src/store/auth/types';

const ERROR_TEXT = 'Обязательное поле';

const Login = () => {
  const location = useLocation();
  const { data, login } = useAuth();
  const { control, formState, handleSubmit } = useForm<FormValues>({ defaultValues: { password: '', login: '' } });

  if (data) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }

  const onSubmit: SubmitHandler<FormValues> = (result) => login(result);

  const { errors } = formState;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        top: '50%',
        left: '50%',
        width: '40%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <Controller
        control={control}
        name="login"
        rules={{ required: ERROR_TEXT }}
        render={({ field }) => (
          <TextField error={!!errors.login} helperText={errors.login?.message} size="small" sx={{ mb: 3 }} {...field} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: ERROR_TEXT }}
        render={({ field }) => (
          <TextField
            size="small"
            type="password"
            sx={{ mb: 3 }}
            error={!!errors.password}
            helperText={errors.password?.message}
            {...field}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
};

export default Login;
