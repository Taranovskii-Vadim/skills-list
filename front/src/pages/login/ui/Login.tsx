import { Navigate, useLocation } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '@shared/ui';

import useAuth from '../model/store';
import { FormValues } from '../model/types';

// TODO login form could be in shared ????

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
      <Input name="login" label="Логин" required control={control} error={errors.login?.message} />
      <Input
        required
        name="password"
        label="Пароль"
        type="password"
        control={control}
        error={errors.password?.message}
      />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
};

export default Login;
