import { useOutletContext, useNavigate } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';
import { CategoriesTable } from '@widgets/categories-table';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();

  const handleNavigateToNewForm = role === 'admin' ? () => navigate('/categories/new') : undefined;

  return (
    <>
      <PageHeader title="Категории" onClick={handleNavigateToNewForm} />
      <CategoriesTable />
    </>
  );
};

export default CategoriesPage;
