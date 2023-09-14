import { Handlers } from '../types';

import { Action, ActionTypes, State } from './types';

const handlers: Handlers<Action, State> = {
  [ActionTypes.SET_CATEGORIES]: (state, { payload }) => ({ ...state, data: payload, isLoading: false }),
  DEFAULT: (state: State) => state,
};

const initialState: State = {
  data: [],
  error: '',
  isLoading: true,
};

export const categories = (state: State = initialState, action: Action): State => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
