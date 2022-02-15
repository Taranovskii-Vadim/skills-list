import * as React from "react";
import Tick from "../UI/Tick";
import Times from "../UI/Times";

export interface NotesItemProps {
  text: string;
  done: boolean;
  readOnlyMode: boolean;
  newSetDone: () => void;
  newRemoveNote: () => void;
}

const NotesItem: React.SFC<NotesItemProps> = ({
  done,
  text,
  readOnlyMode,
  newSetDone,
  newRemoveNote,
}) => {
  const doneStyles = {
    border: done ? "2px solid #4DD599" : "2px solid #E8E8E8",
    backgroundColor: done ? "#4DD599" : "transparent",
    cursor: readOnlyMode ? "normal" : "pointer",
  };

  const setDoneHandler = () => newSetDone();

  const removeNoteHandler = () => newRemoveNote();

  return (
    <div className="noteItem">
      <span
        className="noteItem__done"
        style={doneStyles}
        onClick={() => (readOnlyMode ? null : setDoneHandler())}
      >
        {done && <Tick />}
      </span>
      <span className="noteItem__text">{text}</span>
      {done && !readOnlyMode && (
        <span className="noteItem__delete" onClick={removeNoteHandler}>
          <Times />
        </span>
      )}
    </div>
  );
};

export default NotesItem;
