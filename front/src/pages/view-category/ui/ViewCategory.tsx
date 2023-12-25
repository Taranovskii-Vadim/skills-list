import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageHeader } from '@widgets/page-header';

const ViewCategory = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {}, [id]);

  return (
    <>
      <PageHeader title={`view category page with id = ${id}`} />
    </>
  );
};

export default ViewCategory;
