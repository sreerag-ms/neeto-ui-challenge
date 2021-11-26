import React from "react";

// Hit a width issue with Neetoui table
// Using Antd Table, as NeetoUI table is using Antdesign Table inside
import { Table } from "antd";

import { TABLE_HEADERS } from "./headers";

import { TABLE_DATA } from "../constants";

const ContactsTable = () => {
  return (
    <div className="flex w-full bg-gray-400 ">
      <Table
        columns={TABLE_HEADERS}
        rowSelection={{ type: "checkbox" }}
        dataSource={TABLE_DATA}
        pagination={false}
        rowClassName={(val, index) => index % 2 === 1 && "bg-gray-50"}
      />
    </div>
  );
};

export default ContactsTable;
