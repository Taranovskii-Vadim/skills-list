import TextField from '@mui/material/TextField';
import { HTMLInputTypeAttribute } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

const ERROR_TEXT = 'Обязательное поле';

type Props<T extends FieldValues> = {
  name: Path<T>;
  error: Maybe<string>;
  control: Control<T, unknown>;
  type?: HTMLInputTypeAttribute;
};

const Input = <T extends FieldValues>({ name, control, error, type = 'text' }: Props<T>) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: ERROR_TEXT }}
    render={({ field }) => (
      <TextField type={type} error={!!error} helperText={error} size="small" sx={{ mb: 3 }} {...field} />
    )}
  />
);

export default Input;
