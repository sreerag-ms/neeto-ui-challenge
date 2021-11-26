import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Dropdown, Avatar, Tooltip, Typography } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

import { timeToHourAndDay, getTimeElapsed } from "helpers/timeFunctions";

const Card = ({
  id,
  title,
  description,
  user,
  createdAt,
  setShowDeletePrompt,
  setSelectedNote,
}) => {
  const timeElapsed = getTimeElapsed(Number(createdAt));
  const timeCreated = timeToHourAndDay(Number(createdAt));

  return (
    <div className="flex flex-col border-2 my-2 p-4 rounded-sm shadow-sm">
      <div className="flex flex-row justify-between">
        <Typography style="h4">{title}</Typography>
        <Dropdown icon={MenuVertical} buttonStyle="text">
          <li>Edit</li>
          <li
            onClick={() => {
              setSelectedNote(id);
              setShowDeletePrompt(true);
            }}
          >
            Delete
          </li>
        </Dropdown>
      </div>
      <div className="font-normal text-gray-500 text-sm border-b pb-2">
        {description}
      </div>
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
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  setShowDeletePrompt: PropTypes.func.isRequired,
  setSelectedNote: PropTypes.func.isRequired,
};

export default Card;
