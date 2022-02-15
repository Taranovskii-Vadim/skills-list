import { combineReducers } from "redux";
import addFolderFormReducer from "./addFolderForm/addFolderFormReducer";
import foldersReducer from "./folders/foldersReducer";



export const rootReducer = combineReducers({
  addForm: addFolderFormReducer,
  folders: foldersReducer,
});
