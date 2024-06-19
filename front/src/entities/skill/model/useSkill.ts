import { create } from 'zustand';

import { api } from '@shared/api';
import postSkill from '../api/postSkill';
import postSkillLogo from '../api/postSkillLogo';
import getCategories from '../api/getCategories';

import { CreateSkillPayload, Skill, SkillState } from './types';

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

  createSkill: async ({ logo, ...data }: CreateSkillPayload, redirect: Redirect) => {
    try {
      set({ loading: true });

      let logoFileName: Skill['logo'] = '';

      if (logo) {
        const formData = new FormData();
        formData.append('file', logo);

        logoFileName = await api(postSkillLogo, formData);
      }

      await api(postSkill, { logo: logoFileName, ...data });

      redirect();
    } catch (e) {
      set({ error: 'some error while creating skill' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useSkills;
