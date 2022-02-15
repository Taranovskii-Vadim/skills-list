import React from "react";
import Sidebar from "./containers/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import NotesContainer from "./containers/NotesContainer/NotesContainer";

const App: React.FC = () => {
  return (
    <div className="application">
      <Sidebar />
      <Route exact path="/" component={NotesContainer} />
      <Route exact path="/:folderId" component={NotesContainer} />
    </div>
  );
};

export default App;
