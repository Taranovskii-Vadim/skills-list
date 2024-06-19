type CommonState = { loading: boolean; error: string };

type Base = {
  id: number;
  name: string;
  rate: number;
  createdAt: string;
  updatedAt: string;
};

export type Skill = Base & { categoryName: string; logo: string };

// TODO can add more fields such as description etc
export type FormValues = Prettify<Pick<Skill, 'name' | 'rate'> & { categoryId: number }>;

export type CreateSkillPayload = FormValues & { logo: File | undefined };

// states

export type SkillsState = CommonState & {
  data: Skill[];
  fetchData: () => Promise<void>;
};

export type SkillState = CommonState & {
  data: Maybe<Skill>;
  categories: Dictionary;
  initForm: () => Promise<void>;
  createSkill: (data: CreateSkillPayload, redirect: Redirect) => Promise<void>;
};
