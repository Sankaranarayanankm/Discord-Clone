import React from "react";
import "./SidebarChannel.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../store/slice/appSlice";

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName,
          })
        )
      }
      className="sidebarChannel"
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
