import { Button } from '@mui/material';

type Props = { isNew: boolean };

const SubmitButton = ({ isNew }: Props) => (
  <Button type="submit" variant="contained" sx={{ mr: 3 }}>
    {isNew ? 'Создать' : 'Сохранить'}
  </Button>
);

export default SubmitButton;
