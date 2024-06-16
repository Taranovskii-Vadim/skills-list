import TextField from '@mui/material/TextField';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T, unknown>;
};

const Textarea = <T extends FieldValues>({ label, ...props }: Props<T>) => (
  <Controller
    {...props}
    render={({ field }) => <TextField fullWidth multiline rows={4} size="small" label={label} {...field} />}
  />
);

export default Textarea;
