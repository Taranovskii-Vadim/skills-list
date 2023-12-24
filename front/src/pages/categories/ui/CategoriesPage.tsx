import { useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TableRow, TableCell } from '@mui/material';

import Table from '@shared/ui/mui/Table';

import useCategories from '../model/store';

const COLUMNS = ['Наименование', 'Количество навыков', 'Автор', 'Дата создания', 'Последнее изменение'];

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();
  const { data, loading, error, fetchData } = useCategories();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  if (!data.length) {
    return <div>nothing to show...</div>;
  }

  const handleNavigateToNewForm = role === 'admin' ? () => navigate('/categories/new') : undefined;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4">Категории</Typography>
        {handleNavigateToNewForm ? (
          <Button variant="contained" onClick={handleNavigateToNewForm}>
            Добавить
          </Button>
        ) : null}
      </Box>
      <Table columns={COLUMNS}>
        {data.map((row) => (
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.numberOfSkills}</TableCell>
            <TableCell>{row.author}</TableCell>
            <TableCell>{row.createdAt}</TableCell>
            <TableCell>{row.updatedAt}</TableCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default CategoriesPage;
