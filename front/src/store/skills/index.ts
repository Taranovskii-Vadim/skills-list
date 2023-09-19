import { Handlers } from '../types';

import { Action, ActionTypes, State } from './types';

// TODO fix later
const handlers: Handlers<Action, State> = {
  [ActionTypes.SET_LOADING]: (state) => ({ ...state, isLoading: true }),
  [ActionTypes.SET_SKILLS]: (state, { payload }) => ({ ...state, data: payload, isLoading: false }),
  DEFAULT: (state: State) => state,
};

const initialState: State = {
  data: [],
  error: '',
  isLoading: true,
};

export const skills = (state: State = initialState, action: Action): State => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
