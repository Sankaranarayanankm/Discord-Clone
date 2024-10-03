import React from "react";
import "./Chat.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@mui/icons-material";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slice/userSlice";
import { selectChannelId, selectChannelName } from "../../store/slice/appSlice";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input placeholder="Message #Test channel" type="text" />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
