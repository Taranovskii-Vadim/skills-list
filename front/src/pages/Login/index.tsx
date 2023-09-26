import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { RootState } from 'src/store/types';
import { login } from 'src/store/auth/actions';
import { LoginPayload } from 'src/store/auth/types';

const ERROR_TEXT = 'Обязательное поле';

const Login = () => {
  const location = useLocation();
  // TODO add generic to dispatch
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.auth);
  const { control, formState, handleSubmit } = useForm<LoginPayload>({ defaultValues: { password: '', login: '' } });

  if (data) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }

  const onSubmit: SubmitHandler<LoginPayload> = (result): void => {
    dispatch(login(result));
  };

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
