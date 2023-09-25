import { Action as ReduxAction } from 'redux';
import { CommonState, PayloadAction } from '../types';

export enum ActionTypes {
  // async
  POST_LOGIN = '/auth/POST_LOGIN',

  // sync
  SET_TOKEN = '/auth/SET_TOKEN',
  SET_LOADING = '/auth/SET_LOADING',
}

export type LoginPayload = { login: string; password: string };

export type State = CommonState<string>;

// async

export type PostLoginAction = PayloadAction<ActionTypes.POST_LOGIN, LoginPayload>;

export type AsyncAction = PostLoginAction;

// sync

export type SetLoadingAction = ReduxAction<ActionTypes.SET_LOADING>;
export type SetTokenAction = PayloadAction<ActionTypes.SET_TOKEN, string>;

export type Action = SetTokenAction | SetLoadingAction;
