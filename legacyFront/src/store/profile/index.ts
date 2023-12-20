import { create } from 'zustand';

import { api } from 'src/api';
import getProfile from 'src/api/getProfile';

import { State } from './types';

const useProfile = create<State>((set) => ({
  error: '',
  loading: true,
  data: undefined,

  fetchData: async () => {
    try {
      const data = await api(getProfile);

      set({ data });
    } catch (e) {
      // TODO handle errors
      set({ error: 'Error while fetching profile data' });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProfile;
