type CommonState = { loading: boolean; error: string };

// table of categories
export type BaseCategory = {
  name: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  numberOfSkills: number;
};

export type CategoriesState = CommonState & {
  data: Array<{ id: number } & BaseCategory>;
  fetchData: () => Promise<void>;
};

// view category

export type Category = BaseCategory & { description: string };

export type CategoryViewState = CommonState & { data: Maybe<Category>; fetchData: (id: string) => Promise<void> };

// create category

export type FormValues = Pick<Category, 'name' | 'description'>;

export type CategoryCreationState = CommonState & {
  createCategory: (payload: FormValues, redirect: () => void) => Promise<void>;
};
