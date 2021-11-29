import React, { useState, useContext, useEffect } from "react";

import { Toastr, PageLoader, Alert } from "neetoui/v2";

import SideMenu from "commonComponents/SideMenu";
import TitleBar from "commonComponents/TitleBar";
import SideMenuStatusContext from "contexts/sideMenuStatus";

import { SIDE_MENU_ITEMS, TABLE_DATA } from "./constants";
import CreateContact from "./Create";
import ListContacts from "./List";

const Contacts = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useContext(SideMenuStatusContext);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(-1);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isCreatePaneOpen, setIsCreatePaneOpen] = useState(false);
  const toggleSideMenu = () =>
    setIsSideMenuOpen(isSideMenuOpen => !isSideMenuOpen);

  const handleAddButtonClick = () => {
    logger.log("handleAddButtonClick");
    setIsCreatePaneOpen(true);
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
    setIsCreatePaneOpen(false);
    Toastr.success("Contact created successfully");
  };

  const handleDelete = () => {
    if (typeof contacts[selectedContact] !== "undefined") {
      const newContacts = [...contacts];
      newContacts.splice(selectedContact, 1);
      setContacts(newContacts);
      setIsDeleteAlertOpen(false);
      Toastr.success("Contact deleted successfully");
    } else {
      Toastr.error("Something went wrong!");
    }
  };
  const handleCancelDelete = () => {
    setSelectedContact(-1);
    setIsDeleteAlertOpen(false);
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
        showMenu={isSideMenuOpen}
      />
      <div className="flex flex-col w-full px-5 items-center overflow-auto">
        <div className="flex flex-col w-full">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Contacts"
            onButtonClick={handleAddButtonClick}
            title="All Contacts"
          />
          <ListContacts
            contacts={contacts}
            setSelectedContact={setSelectedContact}
            setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          />
        </div>
      </div>
      <Alert
        isOpen={isDeleteAlertOpen}
        onSubmit={handleDelete}
        onClose={handleCancelDelete}
        title="Delete Contact"
        message="Are you sure you want to delete this contact? This action cannot be undone."
      />
      <CreateContact
        onSubmit={handleCreateContact}
        isCreatePaneOpen={isCreatePaneOpen}
        setIsCreatePaneOpen={setIsCreatePaneOpen}
      />
    </div>
  );
};

export default Contacts;
