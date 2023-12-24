import { create } from 'zustand';

import { api } from '@shared/api';
import getCategories from '../api/getCategories';

import { CategoriesState } from './types';

const useCategories = create<CategoriesState>((set) => ({
  data: [],
  error: '',
  loading: true,

  fetchData: async () => {
    try {
      const data = await api(getCategories);

      set({ data });
    } catch (e) {
      set({ error: 'Error while trying to fetch categories' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCategories;
