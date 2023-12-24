export type Category = {
  id: number;
  name: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  numberOfSkills: number;
};

type Fields = { data: Category[]; error: string; loading: boolean };

type Actions = { fetchData: () => Promise<void> };

export type State = Prettify<Fields & Actions>;
