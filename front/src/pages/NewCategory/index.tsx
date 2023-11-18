import { useNavigate } from 'react-router-dom';
import { Box, Paper, Button, TextField } from '@mui/material';

import { getPathTo } from 'src/routes';

import PageHeader from 'src/components/PageHeader';

const NewCategory = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Новая категория" />
      <Paper sx={{ px: 3, py: 2, mb: 3 }}>
        <Box sx={{ width: '50%' }}>
          <TextField fullWidth size="small" sx={{ mb: 3 }} label="Наименование" />
          <TextField multiline fullWidth rows={4} maxRows={4} size="small" label="Описание" />
        </Box>
      </Paper>
      <Box>
        <Button variant="contained" sx={{ mr: 3 }}>
          Создать
        </Button>
        <Button variant="outlined" onClick={() => navigate(getPathTo('categories'))}>
          Отмена
        </Button>
      </Box>
    </>
  );
};

export default NewCategory;
