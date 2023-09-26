import { Action, ActionTypes, State } from './types';

const initialState: State = {
  data: localStorage.getItem('token') || '',
  error: '',
  isLoading: false,
};

export const auth = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.RESET_TOKEN) {
    return { ...state, data: '' };
  }

  if (action.type === ActionTypes.SET_LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === ActionTypes.SET_TOKEN) {
    return { ...state, data: action.payload, isLoading: false };
  }

  return state;
};
