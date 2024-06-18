import { create } from 'zustand';

import { api } from '@shared/api';
import postSkill from '../api/postSkill';
import getCategories from '../api/getCategories';

import { FormValues, SkillState } from './types';

const useSkills = create<SkillState>((set) => ({
  error: '',
  loading: false,
  categories: [],
  data: undefined,

  initForm: async () => {
    try {
      set({ loading: true });

      const data = await api(getCategories);

      set({ categories: data });
    } catch (e) {
      set({ error: 'some error while fetching categories for create skill form' });
    } finally {
      set({ loading: false });
    }
  },

  createSkill: async (data: FormValues, redirect: Redirect) => {
    try {
      set({ loading: true });

      await api(postSkill, data);

      redirect();
    } catch (e) {
      set({ error: 'some error while creating skill' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useSkills;
