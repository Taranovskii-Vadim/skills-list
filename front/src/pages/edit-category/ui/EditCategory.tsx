import { useOutletContext, useParams } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';
import { CategorySubmitForm } from '@features/submit-category';

const EditCategory = () => {
  const { id } = useParams<{ id: string }>();
  const { role } = useOutletContext<{ role: Role }>();

  // TODO protectRoute to avoid this situation. We request data for edit but user doesnt have permissions for edit
  if (role === 'user') return <div>not found page...</div>;

  if (!id) throw new Error('Can not find page id');

  return (
    <>
      <PageHeader title="Редактирование категории" />
      <CategorySubmitForm id={id} />
    </>
  );
};

export default EditCategory;
