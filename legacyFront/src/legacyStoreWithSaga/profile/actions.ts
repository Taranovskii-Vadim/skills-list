import { ActionTypes, FetchProfileAction, SetProfileAction } from './types';

// async

export const fetchProfile = (): FetchProfileAction => ({ type: ActionTypes.FETCH_PROFILE });

// sync

export const setProfile = (payload: SetProfileAction['payload']): SetProfileAction => ({
  type: ActionTypes.SET_PROFILE,
  payload,
});
