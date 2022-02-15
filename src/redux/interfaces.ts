import { IFoldersState } from "./folders/foldersInterfaces";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IAppState {
  addForm: IAddFolderFormState;
  folders: IFoldersState;
  notes: IFoldersState;
}

/////////addFolderFormReducer//////////
export interface addFolderColor {
  readonly colorId: string;
  color: string;
  isActive: boolean;
}

export interface IAddFolderFormState {
  colors: Array<addFolderColor>;
}

export interface IAddFolderHandlers {
  [name: string]: (
    state: IAddFolderFormState,
    payload?: any
  ) => IAddFolderFormState;
}
