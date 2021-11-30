import React from "react";

import SideBar from "Common/SideBar";

const Wrapper = ({ children }) => (
  <div className="w-screen h-screen flex flex-row">
    <SideBar />
    {children}
  </div>
);

export default Wrapper;
