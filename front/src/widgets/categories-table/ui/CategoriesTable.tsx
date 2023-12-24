import { useEffect } from 'react';
import { TableRow, TableCell } from '@mui/material';

import Table from '@shared/ui/mui/Table';
import { useCategories } from '@entities/category';

const COLUMNS = ['Наименование', 'Количество навыков', 'Автор', 'Дата создания', 'Последнее изменение'];

const CategoriesTable = () => {
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
  );
};

export default CategoriesTable;
