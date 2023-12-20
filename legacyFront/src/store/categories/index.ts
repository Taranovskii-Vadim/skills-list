import { create } from 'zustand';

import { api } from 'src/api';
import getCategories from 'src/api/getCategories';

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
