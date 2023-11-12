import { lazy } from 'react';

import { RootPageKey, Route } from './types';

const Skills = lazy(() => import('../pages/Skills'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Categories = lazy(() => import('../pages/Categories'));

const ROOT = '/';

const ROOT_PATHS: Record<RootPageKey, string> = {
  dashboard: ROOT,
  skills: `${ROOT}skills`,
  categories: `${ROOT}categories`,
};

export const getRoutes = (): Route[] => {
  return [
    { id: 'skills', path: ROOT_PATHS.skills, element: <Skills /> },
    { id: 'dashboard', path: ROOT_PATHS.dashboard, element: <Dashboard /> },
    { id: 'categories', path: ROOT_PATHS.categories, element: <Categories /> },
  ];
};
