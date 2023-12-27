import { useOutletContext } from 'react-router-dom';
import { CategoryCreationForm } from '@features/create-category';

import { PageHeader } from '@widgets/page-header';

const NewCategory = () => {
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();

  if (role === 'user') return <div>not found page...</div>;

  return (
    <>
      <PageHeader title="Новая категория" />
      <CategoryCreationForm />
    </>
  );
};

export default NewCategory;
