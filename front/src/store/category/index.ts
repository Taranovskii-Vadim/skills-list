import { create } from 'zustand';

import { api } from 'src/api';
import postCategory from 'src/api/postCategory';

import { State } from './types';

const useCategory = create<State>((set) => ({
  data: undefined,
  loading: false,
  error: '',

  createCategory: async (payload, redirect) => {
    try {
      set({ loading: true });

      await api(postCategory, payload);

      redirect();
    } catch (e) {
      // TODO can create alert and handle all errors in interceptor
      //   set({ error: e as string });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCategory;
