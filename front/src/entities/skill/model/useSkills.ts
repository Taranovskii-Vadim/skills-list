import { create } from 'zustand';

import { api } from '@shared/api';
import getSkills from '../api/getSkills';

import { SkillsState } from './types';

const useSkills = create<SkillsState>((set) => ({
  data: [],
  error: '',
  loading: true,

  fetchData: async () => {
    try {
      set({ loading: true });
      const data = await api(getSkills);

      set({ data });
    } catch (e) {
      set({ error: 'Error while trying to fetch skills' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useSkills;
