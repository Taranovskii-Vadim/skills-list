import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import Times from "../UI/Times";
import { IAddFolderFormState, addFolderColor } from "../../redux/interfaces";

interface IAddFolderForm {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  addForm: IAddFolderFormState;
  setColor(id: string): void;
  setNewFolder(title: string, colors: Array<addFolderColor>): void;
}

class AddFolderForm extends React.Component<IAddFolderForm> {
  root!: HTMLElement;
  state = { title: "" };

  componentWillMount() {
    this.root = document.createElement("div");
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.setNewFolder(this.state.title, this.props.addForm.colors);
    this.props.setOpenModal(false);
  };

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value });
  };
  
  render() {
    return ReactDOM.createPortal(
      <form className="addFolderForm" onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.changeHandler}
          className="inp"
          placeholder="Название папки"
        />
        <span
          className="addFolderForm__cancel"
          onClick={this.props.setOpenModal.bind(null, false)}
        >
          <Times color="white" />
        </span>
        <div className="addFolderForm__colors">
          {this.props.addForm.colors.map((item) => (
            <span
              key={item.colorId}
              onClick={this.props.setColor.bind(null, item.colorId)}
              className={`icon ${
                item.isActive ? "addFolderForm__activeIcon" : ""
              }`.trim()}
              style={{ backgroundColor: item.color }}
            ></span>
          ))}
        </div>
        <button className="btn greenBtn addFolderForm__add">Добавить</button>
      </form>,
      this.root
    );
  }
}

export default AddFolderForm;
