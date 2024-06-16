import { InputProps } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import TextField from '@mui/material/TextField';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

const DEFAULT_ERROR_TEXT = 'Обязательное поле';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  maxLength?: number;
  error: Maybe<string>;
  sx?: InputProps['sx'];
  required?: true | string;
  control: Control<T, unknown>;
  type?: HTMLInputTypeAttribute;
};

const Input = <T extends FieldValues>({ label, error, required, maxLength, sx, type = 'text', ...props }: Props<T>) => (
  <Controller
    {...props}
    rules={{
      required: typeof required === 'boolean' ? DEFAULT_ERROR_TEXT : required,
      maxLength: maxLength && { value: maxLength, message: `Длина строки должна быть не больше ${maxLength} символов` },
    }}
    render={({ field }) => (
      <TextField
        fullWidth
        type={type}
        size="small"
        label={label}
        sx={{ mb: 3, ...sx }}
        error={!!error}
        helperText={error}
        {...field}
      />
    )}
  />
);

export default Input;
