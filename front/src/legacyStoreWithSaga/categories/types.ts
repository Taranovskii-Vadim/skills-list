import { Action as ReduxAction } from 'redux';
import { CommonState, PayloadAction } from '../types';

export type Category = { id: number; title: string };

export enum ActionTypes {
  FETCH_CATEGORIES = '/categories/FETCH_CATEGORIES',
  SET_CATEGORIES = '/categories/SET_CATEGORIES',
}

export type State = CommonState<Category[]>;

export type FetchCategoriesAction = ReduxAction<ActionTypes.FETCH_CATEGORIES>;
export type SetCategoriesAction = PayloadAction<ActionTypes.SET_CATEGORIES, State['data']>;

export type Action = SetCategoriesAction;
export type AsyncAction = FetchCategoriesAction;
