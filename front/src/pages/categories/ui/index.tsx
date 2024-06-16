import Button from '@mui/material/Button';
import { useOutletContext, useNavigate } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';
import { CategoriesTable } from '@widgets/categories-table';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { role } = useOutletContext<{ role: Role }>();

  const handleNavigateToNewForm = role === 'admin' ? () => navigate('/categories/new') : undefined;

  return (
    <>
      <PageHeader title="Категории">
        <Button variant="contained" onClick={handleNavigateToNewForm}>
          Добавить
        </Button>
      </PageHeader>
      <CategoriesTable />
    </>
  );
};

export default CategoriesPage;
