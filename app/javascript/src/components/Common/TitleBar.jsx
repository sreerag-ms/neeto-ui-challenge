import React from "react";

import { Search, Plus } from "neetoIcons";
import { Input, Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";
import PropTypes from "prop-types";

const TitleBar = ({ title, toggleMenu, buttonLabel, onButtonClick }) => (
  <Header
    menuBarToggle={toggleMenu}
    actionBlock={
      <div className="flex flex-row">
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
    title={title}
  />
);
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default TitleBar;
