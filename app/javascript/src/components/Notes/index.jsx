import React, { useState, useContext, useEffect } from "react";

import { Toastr, PageLoader } from "neetoui/v2";

import DeletePrompt from "commonComponents/DeletePrompt";
import SideMenu from "commonComponents/SideMenu";
import TitleBar from "commonComponents/TitleBar";
import CreateNote from "components/Notes/Create";
import SideMenuStatusContext from "contexts/sideMenuStatus";

import Card from "./Card";
import { SIDE_MENU_ITEMS, NOTES_DATA } from "./constants";

const Notes = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useContext(SideMenuStatusContext);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [showCreatePane, setShowCreatePane] = useState(false);
  const [selectedNote, setSelectedNote] = useState(-1);
  const [notes, setNotes] = useState([]);

  const toggleSideMenu = () =>
    setIsSideMenuOpen(isSideMenuOpen => !isSideMenuOpen);
  const handleAddButtonClick = () => {
    setShowCreatePane(true);
  };

  const createNote = newNote => {
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setShowCreatePane(false);
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
    setShowDeletePrompt(false);
  };
  const handleCancelDelete = () => {
    logger.info("onCancelDelete");
    setShowDeletePrompt(false);
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
                setShowDeletePrompt={setShowDeletePrompt}
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
      <DeletePrompt
        showPrompt={showDeletePrompt}
        onDelete={handleDelete}
        onCancel={handleCancelDelete}
        title="Delete Note"
        message="Are you sure you want to delete the note? This action cannot be undone."
      />
      <CreateNote
        showPane={showCreatePane}
        setShowPane={setShowCreatePane}
        createNote={createNote}
      />
    </div>
  );
};

export default Notes;
