import {
  IFoldersState,
  IFoldersHandlers,
  INote,
  IFolder,
  IFetchFoldersAction,
  IAddFodlerAction,
  IDeleteFolderAction,
  IReceiveFodlerAction,
  ISetNoteAction,
  IMarkResolvedACtion,
  IDeleteNoteACtion,
  IEditTitleACtion,
} from "./foldersInterfaces";
import { IAction } from "../interfaces";
import { myAxios } from "../myAxios";
import { addFolderColor } from "../interfaces";
import { AxiosResponse } from "axios";
import { Dispatch } from "react";

export const FETCH_FOLDERS = "foldersReducer/FETCH_FOLDERS";
export const ADD_FOLDER = "foldersReducer/ADD_FOLDER";
export const DELETE_FOLDER = "foldersReducer/DELETE_FOLDER";
export const GET_FOLDER = "foldersReducer/GET_FOLDER";
export const SET_NOTE = "foldersReducer/SET_NOTE";
export const SET_DONE = "foldersReducer/SET_DONE";
export const DELETE_NOTE = "foldersReducer/DELETE_NOTE";
export const EDIT_TITLE = "foldersReducer/EDIT_TITLE";

const firstSymbToUpper = (str: string) => str[0].toUpperCase() + str.slice(1);

const setDoneHelper = (catalog: IFolder[], payload: any): IFolder[] => {
  return catalog.map((item: any) => {
    if (item.folderId === payload.folderId) {
      item.notes = item.notes?.map((note: any) => {
        if (note.noteId === payload.noteId) {
          note.done = !note.done;
        }
        return note;
      });
    }
    return item;
  });
};

const setNoteHelper = (catalog: IFolder[], payload: any): IFolder[] => {
  return catalog.map((item) => {
    if (item.folderId === payload.folderId) {
      item.notes = [...item.notes!, { ...payload.note }];
    }
    return item;
  });
};

const deleteNoteHelper = (catalog: IFolder[], payload: any): IFolder[] => {
  return catalog.map((item: any) => {
    if (item.folderId === payload.folderId) {
      item.notes = item.notes.filter(
        (note: any) => note.noteId !== payload.noteId
      );
    }
    return item;
  });
};

const editTitleHelper = (catalog: IFolder[], payload: any): IFolder[] => {
  return catalog.map((item: any) => {
    if (item.folderId === payload.folderId) {
      item.title = payload.newTitle;
    }
    return item;
  });
};

const handlers: IFoldersHandlers = {
  [ADD_FOLDER]: (
    state: IFoldersState,
    { payload: { folderId, color, title, notes } }
  ) => ({
    ...state,
    folders: [...state.folders, { folderId, color, title, notes }],
  }),
  [DELETE_FOLDER]: (state: IFoldersState, { payload }) => ({
    ...state,
    folders: state.folders.filter((item) => item.folderId !== payload),
  }),
  [FETCH_FOLDERS]: (state: IFoldersState, { payload }) => ({
    ...state,
    folders: [...payload],
  }),
  [GET_FOLDER]: (state: IFoldersState, { payload }) => ({
    ...state,
    folder: [payload],
  }),
  [SET_NOTE]: (state: IFoldersState, { payload }) => ({
    folders: [...setNoteHelper(state.folders, payload)],
    folder: [...setNoteHelper(state.folder, payload)],
  }),
  [SET_DONE]: (state: IFoldersState, { payload }) => ({
    folders: [...setDoneHelper(state.folders, payload)],
    folder: [...setDoneHelper(state.folder, payload)],
  }),
  [DELETE_NOTE]: (state: IFoldersState, { payload }) => ({
    folders: [...deleteNoteHelper(state.folders, payload)],
    folder: [...deleteNoteHelper(state.folder, payload)],
  }),
  [EDIT_TITLE]: (state: IFoldersState, { payload }) => ({
    folders: [...editTitleHelper(state.folders, payload)],
    folder: [...editTitleHelper(state.folder, payload)],
  }),
  DEFAULT: (state: IFoldersState) => state,
};

const initialState: IFoldersState = {
  folders: [],
  folder: [],
};

const getNotes = (notes: Array<INote>): Array<INote> => {
  let result: Array<INote> = [];
  if (notes) {
    result = Object.keys(notes).map((key: any) => {
      return { ...notes[key], noteId: key };
    });
  }
  return result;
};

export default function foldersReducer(
  state: IFoldersState = initialState,
  action: IAction
) {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}

export const fetchFolders = () => {
  return async (dispatch: Dispatch<IFetchFoldersAction>) => {
    const response = await myAxios.get("/notes.json");
    const payload = Object.keys(response.data).map((key) => ({
      folderId: key,
      color: response.data[key].color,
      title: response.data[key].title,
      notes: getNotes(response.data[key].notes),
    }));
    dispatch({ type: FETCH_FOLDERS, payload });
  };
};

export const addFolder = (title: string, colors: Array<addFolderColor>) => {
  const color: string = colors.find((item) => item.isActive)!.color;
  return async (dispatch: Dispatch<IAddFodlerAction>) => {
    const data = { title: firstSymbToUpper(title), color };
    const response: AxiosResponse<any> = await myAxios.post(
      "/notes.json",
      data
    );
    const payload = { folderId: response.data.name, ...data, notes: [] };
    dispatch({ type: ADD_FOLDER, payload });
  };
};

export const deleteFolder = (folderId: string) => {
  return async (dispatch: Dispatch<IDeleteFolderAction>) => {
    await myAxios.delete(`/notes/${folderId}.json`);
    dispatch({ type: DELETE_FOLDER, payload: folderId });
  };
};

export const receiveFodler = (folderId: string | undefined) => {
  return async (dispatch: Dispatch<IReceiveFodlerAction>) => {
    if (folderId) {
      const response = await myAxios.get(`/notes/${folderId}.json`);
      const payload = {
        ...response.data,
        folderId,
        notes: getNotes(response.data.notes),
      };
      dispatch({ type: GET_FOLDER, payload });
    }
  };
};

export const setNote = (folderId: string, text: string) => {
  return async (dispatch: Dispatch<ISetNoteAction>) => {
    const data = { text: firstSymbToUpper(text), done: false };
    const response = await myAxios.post(`/notes/${folderId}/notes.json`, data);
    const payload = { folderId, note: { noteId: response.data.name, ...data } };
    dispatch({ type: SET_NOTE, payload });
  };
};

export const markResolved = (
  done: boolean,
  folderId: string,
  noteId: string
) => {
  return async (dispatch: Dispatch<IMarkResolvedACtion>) => {
    const payload = { folderId, noteId };
    dispatch({ type: SET_DONE, payload });
    await myAxios.patch(`/notes/${folderId}/notes/${noteId}.json`, {
      done: !done,
    });
  };
};

export const deleteNote = (folderId: string, noteId: string) => {
  return async (dispatch: Dispatch<IDeleteNoteACtion>) => {
    const payload = { folderId, noteId };
    dispatch({ type: DELETE_NOTE, payload });
    await myAxios.delete(`/notes/${folderId}/notes/${noteId}.json`);
  };
};

export const editTitle = (
  folderId: string,
  oldTitle: string,
  title: string
) => {
  return async (dispatch: Dispatch<IEditTitleACtion>) => {
    if (oldTitle.toLowerCase() === title.toLowerCase()) {
      return false;
    } else {
      const newTitle = firstSymbToUpper(title);
      const payload = { folderId, newTitle };
      dispatch({ type: EDIT_TITLE, payload });
      await myAxios.patch(`/notes/${folderId}.json`, {
        title: newTitle,
      });
    }
  };
};
