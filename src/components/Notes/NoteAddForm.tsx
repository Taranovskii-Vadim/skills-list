import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const myFormSchema = Yup.object().shape({
  taskTitle: Yup.string().min(1, "Error").required("Required"),
});

interface MyFormValues {
  taskTitle: string;
}

const initialValues: MyFormValues = { taskTitle: "" };

interface NoteAddFormProps {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  addNewNote(folderId: string, text: string): void;
  folderId: string;
}

const NoteAddForm: React.FC<NoteAddFormProps> = ({
  setEditMode,
  addNewNote,
  folderId,
}) => {
  const submitHandler = (values: MyFormValues) => {
    addNewNote(folderId, values.taskTitle);
    setEditMode(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={myFormSchema}
    >
      {(formProps) => (
        <Form className="addNoteItemForm">
          <Field
            type="text"
            style={{
              borderColor: formProps.errors.taskTitle ? "red" : "black",
            }}
            className="inp addNoteItemForm__inp"
            placeholder="Текст задачи"
            value={formProps.values.taskTitle}
            onChange={formProps.handleChange}
            name="taskTitle"
          />
          <div className="addNoteItemForm__buttons">
            <button type='submit' className="btn greenBtn addNoteItemForm__add">
              Добавить
            </button>
            <button
              className="btn greyBtn addNoteItemForm__cancel"
              onClick={setEditMode.bind(null, false)}
            >
              Отмена
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NoteAddForm;
