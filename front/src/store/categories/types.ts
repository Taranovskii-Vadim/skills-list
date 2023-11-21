import { CommonCategory, CommonState } from '../types';

export type Category = CommonCategory & {
  id: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  numberOfSkills: number;
};

export type Actions = { fetchData: () => Promise<void> };

export type State = Prettify<CommonState<Category[]> & Actions>;
