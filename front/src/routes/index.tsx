import { lazy } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';

import { PageKey, FormPageKey, Link, RootPageKey, Route } from './types';

const Skills = lazy(() => import('../pages/Skills'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Categories = lazy(() => import('../pages/Categories'));

const NewCategory = lazy(() => import('../pages/NewCategory'));

const ROOT = '/';

const ROOT_PATHS: Record<RootPageKey, string> = {
  dashboard: ROOT,
  skills: `${ROOT}skills`,
  categories: `${ROOT}categories`,
};

const FORM_PATHS: Record<FormPageKey, string> = {
  newCategory: `${ROOT_PATHS.categories}/new`,
};

export const getLinks = (): Link[] => {
  const base: Link[] = [
    { id: 'dashboard', text: 'Дашбоард', to: ROOT, icon: <DashboardIcon /> },
    { id: 'skills', text: 'Мои навыки', to: ROOT_PATHS.skills, icon: <ConstructionIcon /> },
    { id: 'categories', text: 'Категории', to: ROOT_PATHS.categories, icon: <CategoryIcon /> },
  ];

  return base;
};

export const getRoutes = (role: UserRole): Route[] => {
  const base: Route[] = [
    { id: 'skills', path: ROOT_PATHS.skills, element: <Skills /> },
    { id: 'dashboard', path: ROOT_PATHS.dashboard, element: <Dashboard /> },
    { id: 'categories', path: ROOT_PATHS.categories, element: <Categories /> },
  ];

  if (role === 'admin') {
    return [...base, { id: 'newCategory', path: FORM_PATHS.newCategory, element: <NewCategory /> }];
  }

  return base;
};

const ALL_PATHS = { ...ROOT_PATHS, ...FORM_PATHS };

export const getPathTo = (key: PageKey): string => ALL_PATHS[key];
