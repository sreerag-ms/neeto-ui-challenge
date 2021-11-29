import React from "react";

import SideBar from "commonComponents/SideBar";

const Wrapper = ({ children }) => (
  <div className="w-full h-screen flex flex-row">
    <SideBar />
    <div className="h-full w-full">{children}</div>
  </div>
);

export default Wrapper;
