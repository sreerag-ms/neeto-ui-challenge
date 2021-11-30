import React from "react";

// The table slow in resizing when Menubar/SideBar is opened.
import { MenuHorizontal } from "neetoIcons";
import { Avatar, Dropdown, Table } from "neetoui/v2";

import { timeToDate } from "helpers/timeFunctions";

const ListContacts = ({
  contacts,
  setSelectedContact,
  setIsDeleteAlertOpen,
}) => {
  const tableHeaders = [
    {
      dataIndex: "name",
      key: "name  ",
      render: (name, row) => (
        <div className="flex flex-row items-center p-0 m-0">
          <Avatar
            className="mr-4"
            size="large"
            user={{
              name,
              imageUrl: row.imageUrl,
            }}
          />
          <div className="flex flex-col">
            <div className="text-base font-semibold"> {name}</div>
            <div className="text-xs m-0 text-gray-400"> {row.role}</div>
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
      render: (val, row, index) => (
        <div className="font-bold">
          <Dropdown
            buttonStyle="text"
            icon={MenuHorizontal}
            position="bottom-end"
          >
            <li
              onClick={() => {
                setSelectedContact(index);
                setIsDeleteAlertOpen(true);
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
    <Table
      columnData={tableHeaders}
      rowData={contacts}
      defaultPageSize={10}
      rowClassName={(val, index) => index % 2 === 1 && "bg-gray-50"}
      pagination={{
        showSizeChanger: false,
      }}
    />
  );
};

export default ListContacts;
