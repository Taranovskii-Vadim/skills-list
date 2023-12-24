import { CategoryCreationForm } from '@features/create-category';

import { PageHeader } from '@widgets/page-header';

const NewCategory = () => (
  <>
    <PageHeader title="Новая категория" />
    <CategoryCreationForm />
  </>
);

export default NewCategory;
