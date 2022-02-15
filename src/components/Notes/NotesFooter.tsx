import * as React from "react";
import NoteAddForm from "./NoteAddForm";
import Times from "../UI/Times";

interface IProps {
  readOnlyMode: boolean;
  editMode: boolean;
  folderId: string;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  addNewNote(folderId: string, text: string): void;
}

const NotesFooter: React.FC<IProps> = (props) => (
  <React.Fragment>
    {!props.readOnlyMode ? (
      props.editMode ? (
        <NoteAddForm
          folderId={props.folderId}
          setEditMode={props.setEditMode}
          addNewNote={props.addNewNote}
        />
      ) : (
        <button
          className="btn note__btn"
          onClick={props.setEditMode.bind(null, true)}
        >
          <Times />
          Новая задача
        </button>
      )
    ) : null}
  </React.Fragment>
);

export default NotesFooter;
