import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = { title: string; onClick?: () => void };

const PageHeader = ({ title, onClick }: Props) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
    <Typography variant="h4">{title}</Typography>
    {onClick ? (
      <Button variant="contained" onClick={onClick}>
        Добавить
      </Button>
    ) : null}
  </Stack>
);

export default PageHeader;
