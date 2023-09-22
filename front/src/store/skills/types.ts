import { Action as ReduxAction } from 'redux';
import { CommonState, PayloadAction } from '../types';

export type Skill = { id: number; name: string; rate: number; createdAt: string };

export enum ActionTypes {
  // async
  POST_SKILL = '/skills/POST_SKILL',
  PATCH_SKILL = '/skills/PATCH_SKILL',
  FETCH_SKILLS = '/skills/FETCH_SKILLS',

  // sync
  SET_SKILL = '/skills/SET_SKILL',
  SET_SKILLS = '/skills/SET_SKILLS',
  SET_LOADING = '/skills/SET_LOADING',
  UPDATE_SKILL = '/skills/UPDATE_SKILL',
}

export type State = CommonState<Skill[]>;
export type UpdateRatePayload = Pick<Skill, 'id' | 'rate'>;
export type CreateSkillPayload = Pick<Skill, 'name'> & { categoryId: number };

// async

export type FetchSkillsAction = PayloadAction<ActionTypes.FETCH_SKILLS, number>;
export type PostSkillAction = PayloadAction<ActionTypes.POST_SKILL, CreateSkillPayload>;
export type PatchSkillAction = PayloadAction<ActionTypes.PATCH_SKILL, UpdateRatePayload>;

export type AsyncAction = FetchSkillsAction | PatchSkillAction;

// sync

export type SetLoadingAction = ReduxAction<ActionTypes.SET_LOADING>;
export type SetSkillAction = PayloadAction<ActionTypes.SET_SKILL, Skill>;
export type SetSkillsAction = PayloadAction<ActionTypes.SET_SKILLS, State['data']>;
export type UpdateSkillAction = PayloadAction<ActionTypes.UPDATE_SKILL, UpdateRatePayload>;

export type Action = SetLoadingAction | SetSkillsAction | UpdateSkillAction | SetSkillAction;
