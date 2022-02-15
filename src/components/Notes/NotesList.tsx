import * as React from "react";
import EmptyNotes from "../EmptyNotes/EmptyNotes";
import NotesItem from "./NotesItem";
import { IFolder } from "../../redux/folders/foldersInterfaces";

interface IProps {
  folder: IFolder;
  readOnlyMode: boolean;
  setDone(doen: boolean, folderId: string, noteId: string): void;
  removeNote(folderId: string, noteId: string): void;
}

const NotesList: React.FC<IProps> = (props) => (
  <div className="note__list">
    {props.folder.notes?.length ? (
      props.folder.notes?.map((note) => {
        const newSetDone = props.setDone.bind(
          null,
          note.done,
          props.folder.folderId,
          note.noteId
        );
        const newRemoveNote = props.removeNote.bind(
          null,
          props.folder.folderId,
          note.noteId
        );
        return (
          <NotesItem
            key={note.noteId}
            text={note.text}
            readOnlyMode={props.readOnlyMode}
            done={note.done}
            newSetDone={newSetDone}
            newRemoveNote={newRemoveNote}
          />
        );
      })
    ) : (
      <EmptyNotes />
    )}
  </div>
);

export default NotesList;
