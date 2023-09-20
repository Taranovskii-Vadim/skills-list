import { Action as ReduxAction } from 'redux';
import { CommonState, PayloadAction } from '../types';

export type Skill = { id: number; name: string; rate: number };

export enum ActionTypes {
  SET_SKILLS = '/skills/SET_SKILLS',
  SET_LOADING = '/skills/SET_LOADING',
  PATCH_SKILL = '/skills/PATCH_SKILL',
  FETCH_SKILLS = '/skills/FETCH_SKILLS',
}

export type State = CommonState<Skill[]>;

export type UpdateRatePayload = Pick<Skill, 'id' | 'rate'>;

export type SetLoadingAction = ReduxAction<ActionTypes.SET_LOADING>;
export type FetchSkillsAction = PayloadAction<ActionTypes.FETCH_SKILLS, number>;
export type SetSkillsAction = PayloadAction<ActionTypes.SET_SKILLS, State['data']>;
export type PatchSkillAction = PayloadAction<ActionTypes.PATCH_SKILL, UpdateRatePayload>;

export type AsyncAction = FetchSkillsAction | PatchSkillAction;
export type Action = SetLoadingAction | SetSkillsAction;
