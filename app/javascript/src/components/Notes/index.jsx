import React, { useState } from "react";

import Card from "./Card";
import { SIDE_MENU_ITEMS, NOTES_DATA } from "./constants";

import SideMenu from "../Common/SideMenu";
import TitleBar from "../Common/TitleBar";

const Notes = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);
  const handleAddButtonClick = () => {
    logger.info("handleAddButtonClick");
  };
  return (
    <div className="w-full h-screen flex flex-row">
      <SideMenu title="Notes" items={SIDE_MENU_ITEMS} showMenu={showSideMenu} />
      <div className="flex flex-col w-full px-5 items-center overflow-auto">
        <div className="flex flex-col w-full max-w-7xl ">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Notes"
            onButtonClick={handleAddButtonClick}
            title="Notes"
          />
          <div className="flex flex-col mb-3">
            {NOTES_DATA.map((note, index) => (
              <Card
                key={index}
                title={note.title}
                description={note.description}
                createdAt={note.createdAt}
                user={note.user}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
