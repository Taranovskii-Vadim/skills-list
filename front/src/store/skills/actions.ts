import {
  ActionTypes,
  SetSkillsAction,
  PatchSkillAction,
  SetLoadingAction,
  UpdateRatePayload,
  FetchSkillsAction,
} from './types';

export const setLoading = (): SetLoadingAction => ({ type: ActionTypes.SET_LOADING });

export const fetchSkills = (payload: number): FetchSkillsAction => ({ type: ActionTypes.FETCH_SKILLS, payload });

export const patchRate = (payload: UpdateRatePayload): PatchSkillAction => ({
  type: ActionTypes.PATCH_SKILL,
  payload,
});

export const setSkills = (payload: SetSkillsAction['payload']): SetSkillsAction => ({
  type: ActionTypes.SET_SKILLS,
  payload,
});
