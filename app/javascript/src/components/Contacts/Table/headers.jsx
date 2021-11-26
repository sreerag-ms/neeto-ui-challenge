import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Button } from "@bigbinary/neetoui/v2";

import { timeToDate } from "helpers/timeFunctions";

export const TABLE_HEADERS = [
  {
    dataIndex: "user",
    key: "user  ",
    render: user => (
      <div className="flex flex-row items-center p-0 m-0">
        <Avatar
          className="mr-4"
          size="large"
          user={{
            name: user.name,
          }}
        />
        <div className="flex flex-col">
          <div> {user.name}</div>
          <div className="text-xs m-0"> {user.role}</div>
        </div>
      </div>
    ),
    title: "Name & role",
    width: 200,
  },

  {
    dataIndex: "email",
    key: "mail",
    title: "Email",
    width: 200,
  },
  {
    dataIndex: "createdAt",
    key: "time",
    title: "Created at",
    render: createdAt => <div>{timeToDate(createdAt)}</div>,
    width: 200,
  },
  {
    dataIndex: "id",
    title: "",
    render: () => (
      <div>
        <Button style="text" icon={MenuHorizontal} />
      </div>
    ),
    width: 50,
  },
];
