import { create } from 'zustand';

import { api } from '@shared/api';

import { FormValues, SkillState } from './types';
import postSkill from '../api/postSkill';

const useSkills = create<SkillState>((set) => ({
  error: '',
  loading: false,
  data: undefined,

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
