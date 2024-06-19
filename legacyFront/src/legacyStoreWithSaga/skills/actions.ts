import {
  ActionTypes,
  SetSkillsAction,
  PatchSkillAction,
  SetLoadingAction,
  UpdateRatePayload,
  FetchSkillsAction,
  UpdateSkillAction,
  SetSkillAction,
  PostSkillAction,
} from "./types";

// async

export const patchRate = (payload: UpdateRatePayload): PatchSkillAction => ({
  type: ActionTypes.PATCH_SKILL,
  payload,
});

export const createSkill = (
  payload: PostSkillAction["payload"]
): PostSkillAction => ({
  type: ActionTypes.POST_SKILL,
  payload,
});

export const fetchSkills = (payload: number): FetchSkillsAction => ({
  type: ActionTypes.FETCH_SKILLS,
  payload,
});

// sync

export const setLoading = (): SetLoadingAction => ({
  type: ActionTypes.SET_LOADING,
});

export const setSkills = (
  payload: SetSkillsAction["payload"]
): SetSkillsAction => ({
  type: ActionTypes.SET_SKILLS,
  payload,
});

export const setSkill = (
  payload: SetSkillAction["payload"]
): SetSkillAction => ({
  type: ActionTypes.SET_SKILL,
  payload,
});

export const updateSkill = (payload: UpdateRatePayload): UpdateSkillAction => ({
  type: ActionTypes.UPDATE_SKILL,
  payload,
});
