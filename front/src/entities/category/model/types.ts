type CommonState = { loading: boolean; error: string };

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

export type FormValues = Pick<Category, 'name' | 'description'>;

export type Category = Omit<BaseCategory, 'id'> & { description: string };

export type CategoryState = CommonState & {
  data: Maybe<Category>;
  fetchData: (id: string) => Promise<void>;
  deleteCategory: (id: string, redirect: () => void) => Promise<void>;
  createCategory: (payload: FormValues, redirect: () => void) => Promise<void>;
  editCategory: (id: string, payload: FormValues, redirect: () => void) => Promise<void>;
};

// dto

export type PostPayloadDTO = { title: string; description: string };

export type PatchPayloadDTO = { title: string; description: string };
