import { create } from 'zustand';

import { api } from '@shared/api';

import getCategory from '../api/getCategory';
import deleteCategory from '../api/deleteCategory';

import { CategoryViewState } from './types';

const useViewCategory = create<CategoryViewState>((set) => ({
  error: '',
  loading: true,
  data: undefined,

  fetchData: async (id: string) => {
    try {
      set({ loading: true });

      const data = await api(getCategory, undefined, id);

      set({ data });
    } catch (e) {
      set({ error: 'Error while trying to get category' });
    } finally {
      set({ loading: false });
    }
  },

  deleteCategory: async (id: string, redirect: () => void) => {
    try {
      set({ loading: true });

      // TODO fix query params in api
      await api(deleteCategory, undefined, id);

      redirect();

      set({ data: undefined });
    } catch (e) {
      set({ error: 'Error while trying to delete category' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useViewCategory;
