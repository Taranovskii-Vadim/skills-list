import { CommonState } from '../types';

export type Category = {
  id: number;
  name: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  numberOfSkills: number;
};

export type Actions = { fetchData: () => Promise<void> };

export type State = Prettify<CommonState<Category[]> & Actions>;
