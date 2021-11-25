import React from "react";

import { SIDE_MENU_ITEMS } from "./constants";

import SideMenu from "../Common/SideMenu";

const Home = () => {
  return (
    <div className="w-full flex flex-row z-10 absolute">
      <SideMenu title="Notes" items={SIDE_MENU_ITEMS} showMenu={true} />
    </div>
  );
};

export default Home;
