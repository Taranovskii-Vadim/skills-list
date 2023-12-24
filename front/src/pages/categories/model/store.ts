import { create } from 'zustand';

import { api } from '@shared/api';
import getCategories from '../api/getCategories';

import { State } from './types';

const useCategories = create<State>((set) => ({
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
