import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';

import { Link } from './types';

export const getLinks = (): Link[] => {
  const result: Link[] = [
    { id: 'dashboard', text: 'Дашбоард', to: '/', icon: <DashboardIcon /> },
    { id: 'skills', text: 'Мои навыки', to: '/skills', icon: <ConstructionIcon /> },
    { id: 'categories', text: 'Категории', to: '/categories', icon: <CategoryIcon /> },
  ];

  return result;
};
