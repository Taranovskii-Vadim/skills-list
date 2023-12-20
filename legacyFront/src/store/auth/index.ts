import { create } from 'zustand';

import { api } from 'src/api';
import postLogin from 'src/api/postLogin';

import { State } from './types';

const useAuth = create<State>((set) => ({
  error: '',
  loading: false,
  data: localStorage.getItem('token') || '',

  login: async (payload) => {
    try {
      set({ loading: true });
      const token = await api(postLogin, payload);

      localStorage.setItem('token', token);

      set({ data: token });
    } catch (e) {
      // TODO handle actual error from api
      set({ error: 'Unexpected error while auth process' });
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    localStorage.removeItem('token');

    set({ data: '' });
  },
}));

export default useAuth;
