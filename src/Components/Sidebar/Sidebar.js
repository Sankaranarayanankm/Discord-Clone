import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarChannel from "../SidebarChannel/SidebarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/slice/userSlice";
import db from "../../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "channels"), (snapshot) => {
      setChannel(
        snapshot.docs.map((item) => ({
          id: item.id,
          channel: item.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const handleAddChannel = async () => {
    const channelName = prompt("Enter a new channel!");
    if (channelName) {
      try {
        await addDoc(collection(db, "channels"), { channelName });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>The Byte Spot</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channel.map((item) => (
            <SidebarChannel
              key={item.id}
              id={item.id}
              channelName={item.channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected </h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(logout())}
          src={user.photo}
        />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
