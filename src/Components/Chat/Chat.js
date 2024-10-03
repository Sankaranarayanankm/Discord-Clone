import React, { useEffect, useState } from "react";
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
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import db from "../../firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      const messagesQuery = query(
        collection(doc(db, "channels", channelId), "messages"),
        orderBy("timestamp", "desc")
      );

      onSnapshot(messagesQuery, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [channelId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(doc(db, "channels", channelId), "messages"), {
        message: input,
        user,
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.log(error.message);
    }
    
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((item) => (
          <Message
            timestamp={item.timestamp}
            message={item.message}
            user={item.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            value={input}
            placeholder={
              channelName != null ? `Message ${channelName}` : "Select Channel"
            }
            type="text"
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="chat__inputButton"
            type="submit"
          >
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
