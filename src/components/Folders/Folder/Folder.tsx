import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Times from "../../UI/Times";
import { IFolder } from "../../../redux/folders/foldersInterfaces";

interface IProps {
  folder: IFolder;
  removeFolder(folderId: string): void;
}

const Folder: React.FC<IProps> = ({ folder, removeFolder }) => {
  const [redirect, setRedirect] = useState(false);

  const removeHandler = () => {
    removeFolder(folder.folderId);
    setRedirect(true);
    setTimeout(() => setRedirect(false), 0);
  };

  return (
    <React.Fragment>
      <NavLink
        key={folder.folderId}
        to={`/${folder.folderId}`}
        className="folders__item"
      >
        <span className="icon" style={{ backgroundColor: folder.color }}></span>
        {folder.title}
        <span className="folders__remove" onClick={removeHandler}>
          <Times />
        </span>
      </NavLink>
      {redirect && <Redirect to="/" />}
    </React.Fragment>
  );
};

export default Folder;
