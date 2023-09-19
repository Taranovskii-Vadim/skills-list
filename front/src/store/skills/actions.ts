import { ActionTypes, FetchSkillsAction, SetLoadingAction, SetSkillsAction } from './types';

export const setLoading = (): SetLoadingAction => ({ type: ActionTypes.SET_LOADING });

export const fetchSkills = (payload: number): FetchSkillsAction => ({ type: ActionTypes.FETCH_SKILLS, payload });

export const setSkills = (payload: SetSkillsAction['payload']): SetSkillsAction => ({
  type: ActionTypes.SET_SKILLS,
  payload,
});
