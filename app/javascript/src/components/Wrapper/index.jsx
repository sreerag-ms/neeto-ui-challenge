import React from "react";

import PropTypes from "prop-types";

import SideBar from "../Common/SideBar";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-row bg-gray">
      <SideBar />
      <div className="relative flex flex-col flex-grow h-screen overflow-auto">
        {children}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
