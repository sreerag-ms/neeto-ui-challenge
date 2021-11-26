import React from "react";

// Hit a width issue with Neetoui table
// Using Antd Table, as NeetoUI table is using Antdesign Table inside

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Dropdown } from "@bigbinary/neetoui/v2";
import { Table } from "antd";

import { timeToDate } from "helpers/timeFunctions";

const ContactsTable = ({
  contacts,
  setSelectedContact,
  setShowDeletePrompt,
}) => {
  const tableHeaders = [
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
            <div className="text-base font-semibold"> {user.name}</div>
            <div className="text-xs m-0 text-gray-400"> {user.role}</div>
          </div>
        </div>
      ),
      title: "Name & role",
      width: 250,
    },

    {
      dataIndex: "email",
      key: "mail",
      title: "Email",
      width: 250,
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
      render: (val, row, i) => (
        <div className="font-bold">
          <Dropdown
            buttonStyle="text"
            icon={MenuHorizontal}
            position="bottom-end"
          >
            <li
              onClick={() => {
                setSelectedContact(i);
                setShowDeletePrompt(true);
              }}
            >
              Delete{" "}
            </li>
          </Dropdown>
        </div>
      ),
      align: "right",
      width: 50,
    },
  ];

  return (
    <div className="flex h-full w-full mt-4 mb-10 ">
      <Table
        columns={tableHeaders}
        rowSelection={{ type: "checkbox" }}
        dataSource={contacts}
        pagination={{
          showSizeChanger: false,
        }}
        rowClassName={(val, index) => index % 2 === 1 && "bg-gray-50"}
      />
    </div>
  );
};

export default ContactsTable;
