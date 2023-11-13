import { lazy } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';

import { Link, RootPageKey, Route } from './types';

const Skills = lazy(() => import('../pages/Skills'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Categories = lazy(() => import('../pages/Categories'));

const ROOT = '/';

const ROOT_PATHS: Record<RootPageKey, string> = {
  dashboard: ROOT,
  skills: `${ROOT}skills`,
  categories: `${ROOT}categories`,
};

// TODO leave categories page for ordinary users, show only table with categories
// deprecate option to create new categories and create categrory route for them

export const getLinks = (role: UserRole): Link[] => {
  const base: Link[] = [
    { id: 'dashboard', text: 'Дашбоард', to: ROOT, icon: <DashboardIcon /> },
    { id: 'skills', text: 'Навыки', to: ROOT_PATHS.skills, icon: <ConstructionIcon /> },
  ];

  if (role === 'admin') {
    return [...base, { id: 'categories', text: 'Категории', to: ROOT_PATHS.categories, icon: <CategoryIcon /> }];
  }

  return base;
};

export const getRoutes = (role: UserRole): Route[] => {
  const base: Route[] = [
    { id: 'skills', path: ROOT_PATHS.skills, element: <Skills /> },
    { id: 'dashboard', path: ROOT_PATHS.dashboard, element: <Dashboard /> },
  ];

  if (role === 'admin') {
    return [...base, { id: 'categories', path: ROOT_PATHS.categories, element: <Categories /> }];
  }

  return base;
};
