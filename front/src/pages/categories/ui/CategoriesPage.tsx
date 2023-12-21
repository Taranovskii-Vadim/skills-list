import { useOutletContext } from 'react-router-dom';

const CategoriesPage = () => {
  const { role } = useOutletContext<{ role: 'admin' | 'user' }>();

  return <div>CategoriesPage {role}</div>;
};

export default CategoriesPage;
