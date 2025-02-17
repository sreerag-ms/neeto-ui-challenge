import React from "react";

import { MenuVertical } from "neetoIcons";
import { Dropdown, Typography } from "neetoui/v2";

const Header = ({ title, id, setSelectedNote, setIsDeleteAlertOpen }) => (
  <div className="flex flex-row justify-between">
    <Typography style="h4">{title}</Typography>
    <Dropdown icon={MenuVertical} buttonStyle="text">
      <li>Edit</li>
      <li
        onClick={() => {
          setSelectedNote(id);
          setIsDeleteAlertOpen(true);
        }}
      >
        Delete
      </li>
    </Dropdown>
  </div>
);

export default Header;
