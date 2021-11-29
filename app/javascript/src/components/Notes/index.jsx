import React, { useState, useEffect } from "react";

import { Toastr, PageLoader, Alert } from "neetoui/v2";

import SideMenu from "commonComponents/SideMenu";
import TitleBar from "commonComponents/TitleBar";
import CreateNote from "components/Notes/Create";

import Card from "./Card";
import { SIDE_MENU_ITEMS, NOTES_DATA } from "./constants";

const Notes = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isCreatePaneOpen, setIsCreatePaneOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(-1);
  const [notes, setNotes] = useState([]);

  const toggleSideMenu = () =>
    setIsSideMenuOpen(isSideMenuOpen => !isSideMenuOpen);
  const handleAddButtonClick = () => {
    setIsCreatePaneOpen(true);
  };

  const createNote = newNote => {
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setIsCreatePaneOpen(false);
    Toastr.success("Note created successfully");
  };
  const handleDelete = () => {
    if (typeof notes[selectedNote] !== "undefined") {
      const newNotes = [...notes];
      newNotes.splice(selectedNote, 1);
      setNotes(newNotes);
      Toastr.success("Note deleted successfully");
    } else {
      Toastr.error("Something went wrong!");
    }
    setIsDeleteAlertOpen(false);
  };
  const handleCancelDelete = () => {
    logger.info("onCancelDelete");
    setIsDeleteAlertOpen(false);
  };

  useEffect(() => {
    // To demonstrate the loading animation
    setTimeout(() => {
      setNotes(NOTES_DATA);
    }, 500);
  }, []);
  // Does not handle empty array
  if (!notes || notes.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="w-full h-screen flex flex-row">
      <SideMenu
        title="Notes"
        items={SIDE_MENU_ITEMS}
        showMenu={isSideMenuOpen}
      />
      <div className="flex flex-col w-full px-5 items-center overflow-auto">
        <div className="flex flex-col w-full max-w-7xl ">
          <TitleBar
            toggleMenu={toggleSideMenu}
            buttonLabel="Add Notes"
            onButtonClick={handleAddButtonClick}
            title="All Notes"
          />
          <div className="flex flex-col mb-3">
            {notes.map((note, index) => (
              <Card
                id={index}
                setIsDeleteAlertOpen={setIsDeleteAlertOpen}
                setSelectedNote={setSelectedNote}
                title={note.title}
                description={note.description}
                createdAt={note.createdAt}
                user={note.user}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Alert
        isOpen={isDeleteAlertOpen}
        onSubmit={handleDelete}
        onClose={handleCancelDelete}
        title="Delete Note"
        message="Are you sure you want to delete the note? This action cannot be undone."
      />
      <CreateNote
        isCreatePaneOpen={isCreatePaneOpen}
        setIsCreatePaneOpen={setIsCreatePaneOpen}
        createNote={createNote}
      />
    </div>
  );
};

export default Notes;
