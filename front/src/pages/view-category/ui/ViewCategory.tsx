import Button from '@mui/material/Button';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';
import { CategoryInformation } from '@widgets/category-info';

const ViewCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();

  if (!id) throw new Error('Can not find page id');

  const handleNavigateToEditForm = () => (role === 'admin' ? navigate(`/categories/edit/${id}`) : undefined);

  return (
    <>
      <PageHeader title="Просмотр категории">
        <Button variant="contained" onClick={handleNavigateToEditForm} sx={{ mr: 3 }}>
          Редактировать
        </Button>
        <Button variant="outlined" color="error" onClick={handleNavigateToEditForm}>
          Удалить
        </Button>
      </PageHeader>
      <CategoryInformation id={id} />
    </>
  );
};

export default ViewCategory;
