type CommonState = { loading: boolean; error: string };

type Base = {
  id: number;
  name: string;
  rate: number;
  // logo: string;
  createdAt: string;
  updatedAt: string;
};

export type Skill = Base & { categoryName: string };

export type SkillsState = CommonState & {
  data: Skill[];
  fetchData: () => Promise<void>;
};
