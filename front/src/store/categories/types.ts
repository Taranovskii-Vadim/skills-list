import { CommonState } from '../types';

export type Category = { id: number; name: string; numberOfSkills: number; description: string };

export type Actions = { fetchData: () => Promise<void> };

export type State = Prettify<CommonState<Category[]> & Actions>;
