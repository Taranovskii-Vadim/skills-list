import {
  IAction,
  IAddFolderFormState,
  IAddFolderHandlers,
} from "../interfaces";

import {nanoid} from 'nanoid';

export const TOGGLE_COLOR = "addFolderReducer/TOGGLE_COLOR";

const handlers: IAddFolderHandlers = {
  [TOGGLE_COLOR]: (state: IAddFolderFormState, { payload }) => ({
    colors: state.colors.map((item) => {
      item.colorId === payload
        ? (item.isActive = true)
        : (item.isActive = false);
      return item;
    }),
  }),
  DEFAULT: (state: IAddFolderFormState) => state,
};

const initialState: IAddFolderFormState = {
  colors: [
    { colorId: nanoid(5), color: "#C9D1D3", isActive: true },
    { colorId: nanoid(5), color: "#42B883", isActive: false },
    { colorId: nanoid(5), color: "#64C4ED", isActive: false },
    { colorId: nanoid(5), color: "#FFBBCC", isActive: false },
    { colorId: nanoid(5), color: "#B6E6BD", isActive: false },
    { colorId: nanoid(5), color: "#C355F5", isActive: false },
    { colorId: nanoid(5), color: "#09011A", isActive: false },
    { colorId: nanoid(5), color: "#FF6464", isActive: false },
  ],
};

export default function addFolderFormReducer(
  state: IAddFolderFormState = initialState,
  action: IAction
) {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}

export const toggleColor = (id: string): IAction => ({
  type: TOGGLE_COLOR,
  payload: id,
});
