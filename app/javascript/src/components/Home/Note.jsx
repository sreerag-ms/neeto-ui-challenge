import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown, Avatar } from "@bigbinary/neetoui/v2";

const Note = ({ note: data }) => {
  const time = (Date.now() - Number(data.createdAt)) / 36000000;
  const timeString = `${Math.floor(time)} hours ago`;
  return (
    <div className="flex flex-col border-2 my-2 p-3">
      <div className="flex flex-row justify-between">
        <div className="text-md font-semibold">{data.title}</div>
        <Dropdown icon={MenuVertical} buttonStyle="text">
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      </div>
      <div className="font-normal text-gray-500 text-sm border-b my-2 py-1">
        {data.description}
      </div>
      <div className="flex flex-row justify-between my-2">
        <button>Getting started</button>
        <div className="flex flex-row h-2">
          {timeString}
          <Avatar user={data.user} size="small" />
        </div>
      </div>
    </div>
  );
};

export default Note;
