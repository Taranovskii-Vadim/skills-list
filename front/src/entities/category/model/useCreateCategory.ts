import { create } from 'zustand';

import { api } from '@shared/api';

import postCategory from '../api/postCategory';

import { PostPayloadDTO } from './dto';
import { CategoryCreationState } from './types';

const useCreateCategory = create<CategoryCreationState>((set) => ({
  error: '',
  loading: false,

  createCategory: async ({ name, description }, redirect) => {
    try {
      set({ loading: true });

      const payload: PostPayloadDTO = { title: name, description };

      await api(postCategory, payload);

      redirect();
    } catch (e) {
      set({ error: 'Error while trying to create category' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCreateCategory;
