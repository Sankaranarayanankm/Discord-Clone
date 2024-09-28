import React from "react";
import "./Message.css";
import { Avatar } from "@mui/material";

const Message = () => {
  return (
    <div className="message">
      <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div className="message__info">
        <h4>
          Username
          <span className="message__timestamp">This is a timestamp</span>
        </h4>
        <p>This is the message!</p>
      </div>
    </div>
  );
};

export default Message;
