import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* chat  */}
      <Chat />
    </div>
  );
};

export default App;
  