import React, { useState } from "react";

import { Toastr } from "@bigbinary/neetoui/v2";

import DeletePrompt from "components/Common/DeletePrompt";
import SideMenu from "components/Common/SideMenu";
import TitleBar from "components/Common/TitleBar";

import { TABLE_DATA } from "./constants";
import { SIDE_MENU_ITEMS } from "./constants";
import CreateContact from "./Create";
import ContactsTable from "./Table";

const Contacts = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [contacts, setContacts] = useState(TABLE_DATA);
  const [selectedContact, setSelectedContact] = useState(-1);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [showCreatePane, setShowCreatePane] = useState(false);
  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);

  const handleAddButtonClick = () => {
    logger.log("handleAddButtonClick");
    setShowCreatePane(true);
  };
  const handleCreateContact = values => {
    logger.log("CreateCOntace", values);
    const newContact = {
      key: contacts.length + 1,
      email: values.email,
      role: values.role.value,
      name: `${values.firstName} ${values.lastName}`,
      createdAt: Date.now(),
    };
    setContacts([newContact, ...contacts]);
    setShowCreatePane(false);
    Toastr.success("Contact created successfully");
  };

  const handleDelete = () => {
    const newContacts = [...contacts];
    newContacts.splice(selectedContact, 1);
    setContacts(newContacts);
    setShowDeletePrompt(false);
    Toastr.success("Contact deleted successfully");
  };
  const handleCancelDelete = () => {
    setSelectedContact(-1);
    setShowDeletePrompt(false);
  };
  return (
    <div className="w-full h-screen flex flex-row ">
      <SideMenu title="Notes" items={SIDE_MENU_ITEMS} showMenu={showSideMenu} />
      <div className="flex flex-col w-full px-5 items-center overflow-auto">
        <div className="flex flex-col w-full">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Contacts"
            onButtonClick={handleAddButtonClick}
            title="Contacts"
          />
          <ContactsTable
            contacts={contacts}
            setSelectedContact={setSelectedContact}
            setShowDeletePrompt={setShowDeletePrompt}
          />
        </div>
      </div>
      <DeletePrompt
        showPrompt={showDeletePrompt}
        onDelete={handleDelete}
        onCancel={handleCancelDelete}
        title="Delete Contact"
        message="Are you sure you want to delete this contact? This action cannot be undone."
      />
      <CreateContact
        onSubmit={handleCreateContact}
        showPane={showCreatePane}
        setShowPane={setShowCreatePane}
      />
    </div>
  );
};

export default Contacts;
