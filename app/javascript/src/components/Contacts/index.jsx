import React, { useState } from "react";

import SideMenu from "components/Common/SideMenu";
import TitleBar from "components/Common/TitleBar";

import { SIDE_MENU_ITEMS } from "./constants";
import ContactsTable from "./Table";

const Contacts = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);

  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);
  const handleAddButtonClick = () => {
    logger.log("handleAddButtonClick");
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <SideMenu title="Notes" items={SIDE_MENU_ITEMS} showMenu={showSideMenu} />
      <div className="flex flex-col w-full px-5 items-center overflow-auto">
        <div className="flex flex-col w-full">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Contacts"
            onButtonClick={handleAddButtonClick}
            title="Contacts"
          />
          <ContactsTable />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
