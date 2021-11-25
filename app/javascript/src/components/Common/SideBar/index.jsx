import React, { useState } from "react";

import { Text, NeetoInsights, UserCircle } from "@bigbinary/neeto-icons";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Sidebar
      onAppSwitcherToggle={function noRefCheck() {}}
      onCollapse={() => {
        setIsCollapsed(!isCollapsed);
      }}
      isCollapsed={isCollapsed}
      profileInfo={{
        imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
        name: "Kieran Miller",
      }}
      navLinks={[
        {
          icon: Text,
          label: "Notes",
          to: "/notes",
        },
        {
          icon: UserCircle,
          label: "Contacts",
          to: "/contacts",
        },
        {
          icon: NeetoInsights,
          label: "Somethng else",
          to: "/something_else",
        },
      ]}
    />
  );
};

export default SideBar;
