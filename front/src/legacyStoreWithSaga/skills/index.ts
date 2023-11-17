import { Action, ActionTypes, State } from './types';

const initialState: State = {
  data: [],
  error: '',
  isLoading: true,
};

export const skills = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.SET_SKILL) {
    return { ...state, data: [...state.data, action.payload] };
  }

  if (action.type === ActionTypes.SET_SKILLS) {
    return { ...state, data: action.payload, isLoading: false };
  }

  if (action.type === ActionTypes.SET_LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === ActionTypes.UPDATE_SKILL) {
    return {
      ...state,
      data: state.data.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, rate: action.payload.rate };
        }

        return item;
      }),
    };
  }

  return state;
};
