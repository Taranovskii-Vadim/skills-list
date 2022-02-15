import {
  FETCH_FOLDERS,
  ADD_FOLDER,
  DELETE_FOLDER,
  GET_FOLDER,
  SET_NOTE,
  SET_DONE,
  DELETE_NOTE,
  EDIT_TITLE,
} from "./foldersReducer";

interface IFolderAndNoteId {
  folderId: string;
  noteId: string;
}

export interface IFoldersState {
  [name: string]: Array<IFolder>;
}

export interface IFoldersHandlers {
  [name: string]: (state: IFoldersState, payload?: any) => IFoldersState;
}

export interface INote {
  readonly noteId: string;
  done: boolean;
  text: string;
}

export interface IFolder {
  readonly folderId: string;
  color: string;
  title: string;
  notes?: Array<INote>;
}

export interface IFetchFoldersAction {
  type: typeof FETCH_FOLDERS;
  payload: Array<IFolder>;
}

export interface IAddFodlerAction {
  type: typeof ADD_FOLDER;
  payload: IFolder;
}

export interface IDeleteFolderAction {
  type: typeof DELETE_FOLDER;
  payload: string;
}

export interface IReceiveFodlerAction {
  type: typeof GET_FOLDER;
  payload: IFolder;
}

export interface ISetNoteAction {
  type: typeof SET_NOTE;
  payload: any;
}

export interface IMarkResolvedACtion {
  type: typeof SET_DONE;
  payload: IFolderAndNoteId;
}

export interface IDeleteNoteACtion {
  type: typeof DELETE_NOTE;
  payload: IFolderAndNoteId;
}

export interface IEditTitleACtion {
  type: typeof EDIT_TITLE;
  payload: {
    folderId: string;
    newTitle: string;
  };
}
