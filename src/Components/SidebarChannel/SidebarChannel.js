import React from "react";
import "./SidebarChannel.css";

const SidebarChannel = ({ id, channel }) => {
  return (
    <div className="sidebarChannel">
      <h1>SidebarChannel Component</h1>

      <h4>
        <span className="sidebarChannel__hash">#</span>
        Youtube
      </h4>
    </div>
  );
};

export default SidebarChannel;
