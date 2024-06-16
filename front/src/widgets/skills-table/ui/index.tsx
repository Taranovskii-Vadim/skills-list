import { useEffect } from 'react';
import { TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Table, TableRow } from '@shared/ui/mui';
import { useSkills } from '@entities/skill';

const COLUMNS = ['Наименование', 'Категория', 'Рейтинг', 'Дата создания', 'Дата обновления'];

const SkillsTable = () => {
  const navigate = useNavigate();
  const { data, loading, error, fetchData } = useSkills();

  useEffect(() => {
    fetchData();
  }, []);

  // TODO change to backdrop later
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
        <TableRow key={row.id} onClick={() => navigate(`/skills/${row.id}`)}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.categoryName}</TableCell>
          <TableCell>{row.rate}</TableCell>
          <TableCell>{row.createdAt}</TableCell>
          <TableCell>{row.updatedAt}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

export default SkillsTable;
