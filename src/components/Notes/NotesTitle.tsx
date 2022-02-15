import * as React from "react";
import Pen from "../UI/Pen";

interface NotesTitleProps {
  title: string;
  color: string;
  readOnlyMode: boolean;
  folderId:string;
  changeTitle(folderId:string,oldTitle:string,title:string):void;
}

const NotesTitle: React.FC<NotesTitleProps> = ({
  title,
  color,
  readOnlyMode,
  changeTitle,
  folderId
}) => {
  const [editTitleMode, setEditTitleMode] = React.useState(false);
  const [notesTitle = title, setNotesTitle] = React.useState();

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNotesTitle(event.target.value);

  const submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    changeTitle(folderId,title,notesTitle);
    setEditTitleMode(false);
  }
  return (
    <div className="note__title">
      {editTitleMode ? (
        <form className='editTitleForm' onSubmit={submitHandler}>
          <input
            type="text"
            className="inp"
            value={notesTitle}
            onChange={changeTitleHandler}
          />
        </form>
      ) : (
        <React.Fragment>
          <h1 style={{ color }}>{title}</h1>
          {readOnlyMode || (
            <button
              className="btn editBtn"
              onClick={setEditTitleMode.bind(null, true)}
            >
              <Pen />
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default NotesTitle;
