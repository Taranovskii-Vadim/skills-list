import React, { useEffect } from "react";
import Notes from "../../components/Notes/Notes";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { IFoldersState } from "../../redux/folders/foldersInterfaces";
import { IAppState } from "../../redux/interfaces";
import {
  receiveFodler,
  setNote,
  markResolved,
  deleteNote,
  editTitle,
} from "../../redux/folders/foldersReducer";

interface IProps extends RouteComponentProps {
  match: any;
  folders: IFoldersState;
  getFolder(folderId: string | undefined): void;
  addNewNote(folderId: string, text: string): void;
  setDone(done: boolean, folderId: string, noteId: string): void;
  removeNote(folderId: string, noteId: string): void;
  changeTitle(folderId: string, oldTitle: string, title: string): void;
}

const NotesContainer: React.FC<IProps> = ({
  match,
  folders,
  getFolder,
  addNewNote,
  setDone,
  removeNote,
  changeTitle,
}) => {
  useEffect(() => {
    getFolder(match.params.folderId);
  }, [match.params.folderId]);

  return (
    <div className="container notesContainer">
      <Notes
        folderId={match.params.folderId}
        addNewNote={addNewNote}
        setDone={setDone}
        folders={folders}
        removeNote={removeNote}
        changeTitle={changeTitle}
      />
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({ folders: state.folders });

const mapDispatchToProps = (dispatch: any) => ({
  getFolder: (folderId: string | undefined) =>
    dispatch(receiveFodler(folderId)),
  addNewNote: (folderId: string, text: string) =>
    dispatch(setNote(folderId, text)),
  setDone: (done: boolean, folderId: string, noteId: string) =>
    dispatch(markResolved(done, folderId, noteId)),
  removeNote: (folderId: string, noteId: string) =>
    dispatch(deleteNote(folderId, noteId)),
  changeTitle: (folderId: string, oldTitle: string, title: string) =>
    dispatch(editTitle(folderId, oldTitle, title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NotesContainer));
