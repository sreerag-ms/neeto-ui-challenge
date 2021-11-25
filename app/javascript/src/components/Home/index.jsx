import React, { useState } from "react";

import { SIDE_MENU_ITEMS, NOTES_DATA } from "./constants";
import Note from "./Note";

import SideMenu from "../Common/SideMenu";
import TitleBar from "../Common/TitleBar";

const Home = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);
  const handleAddButtonClick = () => {
    logger.info("handleAddButtonClick");
  };
  return (
    <div className="w-full flex flex-row z-10 absolute">
      <SideMenu title="Notes" items={SIDE_MENU_ITEMS} showMenu={showSideMenu} />
      <div className="flex flex-col w-full px-3 items-center">
        <div className="flex flex-col w-full max-w-7xl ">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Notes"
            onButtonClick={handleAddButtonClick}
          />
          <div className="flex flex-col w-full h-full">
            {NOTES_DATA.map((note, index) => (
              <Note key={index} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
