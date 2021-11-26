import React from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2/";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";
import PropTypes from "prop-types";

const SideMenu = ({ title, items, showMenu }) => (
  <MenuBar showMenu={showMenu} title={title}>
    {(items.main ?? []).map((item, index) => (
      <MenuBar.Block
        label={item.name}
        count={item.count}
        key={index}
        active={item.active}
      />
    ))}

    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </MenuBar.SubTitle>
    {(items.segments ?? []).map((item, index) => (
      <MenuBar.Block
        label={item.name}
        count={item.count}
        key={index}
        active={item.active}
      />
    ))}
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Settings,
        },
        {
          icon: Plus,
        },
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </MenuBar.SubTitle>
    {(items.tags ?? []).map((item, index) => (
      <MenuBar.Block
        label={item.name}
        count={item.count}
        key={index}
        active={item.active}
      />
    ))}
  </MenuBar>
);
SideMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.object,
  showMenu: PropTypes.bool,
};
export default SideMenu;
