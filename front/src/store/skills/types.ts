import { Action as ReduxAction } from 'redux';
import { CommonState, PayloadAction } from '../types';

export type Skill = {
  id: number;
  name: string;
  rate: number;
};

export enum ActionTypes {
  SET_SKILLS = '/skills/SET_SKILLS',
  SET_LOADING = '/skills/SET_LOADING',
  FETCH_SKILLS = '/skills/FETCH_SKILLS',
}

export type State = CommonState<Skill[]>;

export type SetLoadingAction = ReduxAction<ActionTypes.SET_LOADING>;
export type FetchSkillsAction = PayloadAction<ActionTypes.FETCH_SKILLS, number>;
export type SetSkillsAction = PayloadAction<ActionTypes.SET_SKILLS, State['data']>;

export type Action = SetLoadingAction | SetSkillsAction;
export type AsyncAction = FetchSkillsAction;
