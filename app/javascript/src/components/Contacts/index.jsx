import React, { useState, useContext, useEffect } from "react";

import { Toastr, PageLoader } from "@bigbinary/neetoui/v2";

import DeletePrompt from "components/Common/DeletePrompt";
import SideMenu from "components/Common/SideMenu";
import TitleBar from "components/Common/TitleBar";
import SideMenuStatusContext from "contexts/sideMenuStatus";

import { TABLE_DATA } from "./constants";
import { SIDE_MENU_ITEMS } from "./constants";
import CreateContact from "./Create";
import ContactsTable from "./Table";

const Contacts = () => {
  const [showSideMenu, setShowSideMenu] = useContext(SideMenuStatusContext);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(-1);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [showCreatePane, setShowCreatePane] = useState(false);
  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);

  const handleAddButtonClick = () => {
    logger.log("handleAddButtonClick");
    setShowCreatePane(true);
  };
  const handleCreateContact = values => {
    const newContact = {
      key: contacts.length + 1,
      email: values.email.trim(),
      role: values.role.value.trim(),
      name: `${values.firstName.trim()} ${values.lastName.trim()}`,
      createdAt: Date.now(),
    };
    setContacts([newContact, ...contacts]);
    setShowCreatePane(false);
    Toastr.success("Contact created successfully");
  };

  const handleDelete = () => {
    if (typeof contacts[selectedContact] !== "undefined") {
      const newContacts = [...contacts];
      newContacts.splice(selectedContact, 1);
      setContacts(newContacts);
      setShowDeletePrompt(false);
      Toastr.success("Contact deleted successfully");
    } else {
      Toastr.error("Something went wrong!");
    }
  };
  const handleCancelDelete = () => {
    setSelectedContact(-1);
    setShowDeletePrompt(false);
  };

  useEffect(() => {
    // To demo the loading animation
    setTimeout(() => {
      setContacts(TABLE_DATA);
    }, 500);
  }, []);
  // Demo check, does not handle empty array
  if (!contacts || contacts.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="w-full h-screen flex flex-row ">
      <SideMenu
        title="Contacts"
        items={SIDE_MENU_ITEMS}
        showMenu={showSideMenu}
      />
      <div className="flex flex-col w-full px-5 items-center overflow-auto">
        <div className="flex flex-col w-full">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Contacts"
            onButtonClick={handleAddButtonClick}
            title="All Contacts"
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
