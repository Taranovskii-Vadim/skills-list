import { useOutletContext } from 'react-router-dom';

import { CategorySubmitForm } from '@features/create-category';

import { PageHeader } from '@widgets/page-header';

const NewCategory = () => {
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();

  // TODO can create protect route just like for auth but for role
  if (role === 'user') return <div>not found page...</div>;

  return (
    <>
      <PageHeader title="Новая категория" />
      <CategorySubmitForm mode="new" />
    </>
  );
};

export default NewCategory;
