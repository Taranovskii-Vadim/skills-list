import { Action, ActionTypes, State } from './types';

const initialState: State = {
  error: '',
  data: undefined,
  isLoading: true,
};

export const profile = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.SET_PROFILE) {
    return { ...state, isLoading: false, data: action.payload };
  }

  return state;
};
