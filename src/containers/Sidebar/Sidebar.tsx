import React, { useState, useEffect } from "react";
import Times from "../../components/UI/Times";
import Folders from "../../components/Folders/Folders";
import AddFolderForm from "../../components/AddFolderForm/AddFolderForm";
import { connect } from "react-redux";
import {
  IAppState,
  IAddFolderFormState,
  addFolderColor,
} from "../../redux/interfaces";
import { IFoldersState } from "../../redux/folders/foldersInterfaces";
import { toggleColor } from "../../redux/addFolderForm/addFolderFormReducer";
import {
  fetchFolders,
  addFolder,
  deleteFolder,
} from "../../redux/folders/foldersReducer";

interface IProps {
  addForm: IAddFolderFormState;
  folders: IFoldersState;
  setColor(id: string): void;
  getFolders(): void;
  setNewFolder(title: string, colors: Array<addFolderColor>): void;
  removeFolder(folderId: string): void;
}

const Sidebar: React.FC<IProps> = ({
  addForm,
  folders,
  setColor,
  getFolders,
  setNewFolder,
  removeFolder,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    getFolders();
  }, []);
  return (
    <React.Fragment>
      <div className="sidebar container">
        <Folders removeFolder={removeFolder} folders={folders} />
        <button className="btn" onClick={setOpenModal.bind(null, true)}>
          <Times /> Добавить папку
        </button>
      </div>
      {openModal && (
        <AddFolderForm
          addForm={addForm}
          setNewFolder={setNewFolder}
          setOpenModal={setOpenModal}
          setColor={setColor}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: IAppState) => ({
  addForm: state.addForm,
  folders: state.folders,
});

const mapDispatchToProps = (dispatch: any) => ({
  setColor: (id: string) => dispatch(toggleColor(id)),
  getFolders: () => dispatch(fetchFolders()),
  removeFolder: (folderId: string) => dispatch(deleteFolder(folderId)),
  setNewFolder: (title: string, colors: Array<addFolderColor>) =>
    dispatch(addFolder(title, colors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
