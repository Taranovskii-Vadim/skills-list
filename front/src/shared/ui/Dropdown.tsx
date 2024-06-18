import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, FormControlProps, FormHelperText } from '@mui/material';

const DEFAULT_ERROR_TEXT = 'Обязательное поле';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: Dictionary;
  error: Maybe<string>;
  required?: true | string;
  sx?: FormControlProps['sx'];
  control: Control<T, unknown>;
};

const Dropdown = <T extends FieldValues>({ label, error, required, options, sx, ...props }: Props<T>) => (
  <Controller
    {...props}
    rules={{
      required: typeof required === 'boolean' ? DEFAULT_ERROR_TEXT : required,
    }}
    render={({ field }) => (
      <FormControl fullWidth error={!!error} size="small" sx={{ mb: 3, ...sx }}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select labelId={label} label={label} {...field}>
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {error ? <FormHelperText error>{error}</FormHelperText> : null}
      </FormControl>
    )}
  />
);

export default Dropdown;
