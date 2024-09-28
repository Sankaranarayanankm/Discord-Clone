import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./store/slice/userSlice";
import Login from "./Components/Login/Login";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
