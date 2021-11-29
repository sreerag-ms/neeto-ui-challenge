import React, { useState } from "react";

import { Sidebar } from "neetoui/v2/layouts";

import { NAV_LINKS, PROFILE_INFO } from "./constants";
import Logo from "./Logo";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Sidebar
      onCollapse={() => setIsCollapsed(isCollapsed => !isCollapsed)}
      isCollapsed={isCollapsed}
      profileInfo={PROFILE_INFO}
      navLinks={NAV_LINKS}
      organizationInfo={{ logo: <Logo /> }}
    />
  );
};

export default SideBar;
