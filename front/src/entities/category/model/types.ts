type CommonState = { loading: boolean; error: string };

// table of categories
export type BaseCategory = {
  id: number;
  name: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  numberOfSkills: number;
};

export type CategoriesState = CommonState & {
  data: BaseCategory[];
  fetchData: () => Promise<void>;
};

// view category

export type Category = BaseCategory & { description: string };

// create category

export type FormValues = Pick<Category, 'name' | 'description'>;

export type CategoryCreationState = CommonState & {
  createCategory: (payload: FormValues, redirect: () => void) => Promise<void>;
};
