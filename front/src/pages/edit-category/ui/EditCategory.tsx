import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { useCategory } from '@entities/category';

import { PageHeader } from '@widgets/page-header';

import { CategorySubmitForm } from '@features/submit-category';

const EditCategory = () => {
  const { fetchData } = useCategory();
  const { id } = useParams<{ id: string }>();
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  // TODO protectRoute to avoid this situation. We request data for edit but user doesnt have permissions for edit
  if (role === 'user') return <div>not found page...</div>;

  if (!id) throw new Error('Can not find page id');

  return (
    <>
      <PageHeader title="Редактирование категории" />
      <CategorySubmitForm id={id} mode="edit" />
    </>
  );
};

export default EditCategory;
