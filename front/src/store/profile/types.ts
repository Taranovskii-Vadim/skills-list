import { Action as ReduxAction } from 'redux';

import { CommonState, PayloadAction } from '../types';

export type Profile = { login: string; role: UserRole };

export enum ActionTypes {
  // async
  FETCH_PROFILE = '/profile/FETCH_PROFILE',

  // sync
  SET_PROFILE = '/profile/SET_PROFILE',
}

export type State = CommonState<Profile>;

// async

export type FetchProfileAction = ReduxAction<ActionTypes.FETCH_PROFILE>;

export type AsyncAction = FetchProfileAction;

// sync

export type SetProfileAction = PayloadAction<ActionTypes.SET_PROFILE, Profile>;

export type Action = SetProfileAction;
