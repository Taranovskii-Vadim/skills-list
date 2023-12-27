import { useParams } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';
import { CategoryInformation } from '@widgets/category-info';

const ViewCategory = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) throw new Error('Can not find page id');

  return (
    <>
      <PageHeader title="Просмотр категории" />
      <CategoryInformation id={id} />
    </>
  );
};

export default ViewCategory;
