import React from "react";

import { Clock } from "neetoIcons";
import { Avatar, Tooltip } from "neetoui/v2";

import { timeToHourAndDay, getTimeElapsed } from "helpers/timeFunctions";

const Footer = ({ createdAt, user }) => {
  const timeElapsed = getTimeElapsed(Number(createdAt));
  const timeCreated = timeToHourAndDay(Number(createdAt));

  return (
    <div className="flex flex-row justify-between mt-3">
      <button className="px-2 py-1 border-solid border bg-gray-100 border-gray-500 text-gray-500 rounded-sm text-xs">
        Getting started
      </button>
      <Tooltip content={timeCreated} position="bottom">
        <div className="flex flex-row items-center text-gray-500 text-xs">
          <Clock size="13" />
          <span className="mr-3 ml-1">{timeElapsed}</span>
          <Avatar user={user} size="small" />
        </div>
      </Tooltip>
    </div>
  );
};

export default Footer;
