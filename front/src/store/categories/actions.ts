import { ActionTypes, FetchCategoriesAction, SetCategoriesAction } from './types';

export const fetchCategories = (): FetchCategoriesAction => ({ type: ActionTypes.FETCH_CATEGORIES });

export const setCategories = (payload: SetCategoriesAction['payload']): SetCategoriesAction => ({
  type: ActionTypes.SET_CATEGORIES,
  payload,
});
