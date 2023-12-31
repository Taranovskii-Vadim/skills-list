import { create } from 'zustand';

import { api } from '@shared/api';

import getCategory from '../api/getCategory';
import postCategory from '../api/postCategory';
import patchCategory from '../api/patchCategory';
import deleteCategory from '../api/deleteCategory';

import { PatchPayloadDTO, PostPayloadDTO } from './dto';
import { CategoryState, FormValues } from './types';

const useCategory = create<CategoryState>((set) => ({
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

  editCategory: async (id: string, { name, description }: FormValues, redirect: () => void) => {
    try {
      set({ loading: true });

      const payload: PatchPayloadDTO = { title: name, description };

      await api(patchCategory, payload, id);

      redirect();
    } catch (e) {
      set({ error: 'Error while trying to edit category' });
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

export default useCategory;
