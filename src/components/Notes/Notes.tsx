import React, { useState } from "react";
import { IFoldersState } from "../../redux/folders/foldersInterfaces";
import NotesTitle from "./NotesTitle";
import NotesList from "./NotesList";
import NotesFooter from "./NotesFooter";

interface IProps {
  folders: IFoldersState;
  folderId: string | undefined;
  addNewNote(folderId: string, text: string): void;
  setDone(doen: boolean, folderId: string, noteId: string): void;
  removeNote(folderId: string, noteId: string): void;
  changeTitle(folderId: string, oldTitle: string, title: string): void;
}

const Notes: React.FC<IProps> = (props) => {
  const [readOnlyMode] = useState(Boolean(!props.folderId));
  const [editMode, setEditMode] = useState(false);
  return (
    <React.Fragment>
      {props.folders[props.folderId ? "folder" : "folders"].map((item) => {
        return (
          <div key={item.folderId} className="note">
            <NotesTitle
              title={item.title}
              changeTitle={props.changeTitle}
              folderId={item.folderId}
              readOnlyMode={readOnlyMode}
              color={item.color}
            />
            <hr />
            <NotesList
              folder={item}
              readOnlyMode={readOnlyMode}
              setDone={props.setDone}
              removeNote={props.removeNote}
            />
            <NotesFooter
              readOnlyMode={readOnlyMode}
              editMode={editMode}
              folderId={item.folderId}
              setEditMode={setEditMode}
              addNewNote={props.addNewNote}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Notes;
