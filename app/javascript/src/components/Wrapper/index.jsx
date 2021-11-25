import React from "react";

import PropTypes from "prop-types";

import SideBar from "../Common/SideBar";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-row">
      <SideBar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
