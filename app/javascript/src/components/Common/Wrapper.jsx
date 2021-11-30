import React from "react";

import SideBar from "Common/SideBar";

const Wrapper = ({ children }) => (
  <div className="w-screen h-screen flex flex-row">
    <SideBar />
    <div className="h-full w-full">{children}</div>
  </div>
);

export default Wrapper;
