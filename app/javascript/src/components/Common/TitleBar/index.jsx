import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Input, Button } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

const TitleBar = ({ children, toggleMenu, buttonLabel, onButtonClick }) => {
  return (
    <div>
      <Header
        menuBarToggle={toggleMenu}
        actionBlock={
          <div className="flex flex-row">
            {children}
            <Input
              prefix={<Search />}
              placeholder="Search for something"
              className="mx-3"
            />
            <Button
              label={buttonLabel}
              icon={Plus}
              onClick={onButtonClick}
              style="primary"
            />
          </div>
        }
        title="Notes"
      />
    </div>
  );
};

export default TitleBar;
