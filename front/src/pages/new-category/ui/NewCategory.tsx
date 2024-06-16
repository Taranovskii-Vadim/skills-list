import { useOutletContext } from 'react-router-dom';

import { CategorySubmitForm } from '@features/submit-category';

import { PageHeader } from '@widgets/page-header';

const NewCategory = () => {
  const { role } = useOutletContext<{ role: Role }>();

  // TODO can create protect route just like for auth but for role
  if (role === 'user') return <div>not found page...</div>;

  return (
    <>
      <PageHeader title="Новая категория" />
      <CategorySubmitForm />
    </>
  );
};

export default NewCategory;
