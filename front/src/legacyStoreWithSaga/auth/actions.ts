import {
  ActionTypes,
  LoginPayload,
  SetTokenAction,
  SetLoadingAction,
  PostLoginAction,
  ResetTokenAction,
} from './types';

// async

export const login = (payload: LoginPayload): PostLoginAction => ({ type: ActionTypes.POST_LOGIN, payload });

// sync

export const setLoading = (): SetLoadingAction => ({ type: ActionTypes.SET_LOADING });

export const resetToken = (): ResetTokenAction => ({ type: ActionTypes.RESET_TOKEN });

export const setToken = (payload: SetTokenAction['payload']): SetTokenAction => ({
  type: ActionTypes.SET_TOKEN,
  payload,
});
