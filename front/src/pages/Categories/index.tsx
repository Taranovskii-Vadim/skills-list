import { useEffect } from 'react';
import { Box, Button, Typography, TableRow, TableCell } from '@mui/material';

import Table from 'src/ui/Table';
import useCategories from 'src/store/categories';

import { COLUMNS } from './constants';

const Categories = () => {
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

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Категории</Typography>
        <Button variant="contained">Добавить</Button>
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

export default Categories;
