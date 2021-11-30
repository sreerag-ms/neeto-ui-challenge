import React from "react";

import { Sidebar } from "neetoui/v2/layouts";

import { NAV_LINKS, PROFILE_INFO } from "./constants";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <Sidebar
      isCollapsible
      isCollapsed
      profileInfo={PROFILE_INFO}
      navLinks={NAV_LINKS}
      organizationInfo={{ logo: <Logo /> }}
    />
  );
};

export default SideBar;
