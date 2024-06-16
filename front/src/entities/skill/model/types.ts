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

// TODO can add more fields such as description
export type FormValues = Prettify<Pick<Skill, 'name' | 'rate'> & { categoryId: number }>;

// states

export type SkillsState = CommonState & {
  data: Skill[];
  fetchData: () => Promise<void>;
};

export type SkillState = CommonState & {
  data: Maybe<Skill>;
  createSkill: (data: FormValues, redirect: Redirect) => Promise<void>;
};
