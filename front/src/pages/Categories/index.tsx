import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableRow, TableCell } from '@mui/material';

import { getPathTo } from 'src/routes';
import useCategories from 'src/store/categories';

import Table from 'src/ui/Table';
import PageHeader from 'src/components/PageHeader';

import { COLUMNS } from './constants';

const Categories = () => {
  const navigate = useNavigate();
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

  // TODO can move only admin role
  const handleNavigateToNewForm = () => navigate(getPathTo('newCategory'));

  return (
    <>
      <PageHeader title="Категории" onClick={handleNavigateToNewForm} />
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
