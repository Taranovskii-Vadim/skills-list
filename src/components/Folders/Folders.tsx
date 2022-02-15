import React from "react";
import { NavLink } from "react-router-dom";
import { IFoldersState } from "../../redux/folders/foldersInterfaces";
import Folder from "./Folder/Folder";
import TaskIcon from '../../images/Vector.svg';

interface IProps {
  folders: IFoldersState;
  removeFolder(folderId:string):void
}

const Folders: React.FC<IProps> = ({ folders,removeFolder }) => {
  return (
    <nav className="folders">
      <NavLink exact to="/" className="folders__item">
        <span className="icon"><img src={TaskIcon} alt="taskImg"/></span>
        Все задачи
      </NavLink>
      {folders.folders.map((item) => (
        <Folder removeFolder={removeFolder} key={item.folderId} folder={item} />
      ))}
    </nav>
  );
};

export default Folders;
