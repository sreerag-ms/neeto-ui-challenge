import React from "react";

import PropTypes from "prop-types";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({
  id,
  title,
  description,
  user,
  createdAt,
  setShowDeletePrompt,
  setSelectedNote,
}) => {
  return (
    <div className="flex flex-col border-2 my-2 p-4 rounded-sm shadow-sm">
      <Header
        id={id}
        title={title}
        setShowDeletePrompt={setShowDeletePrompt}
        setSelectedNote={setSelectedNote}
      />
      <Body description={description} />
      <Footer user={user} createdAt={createdAt} />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  setShowDeletePrompt: PropTypes.func.isRequired,
  setSelectedNote: PropTypes.func.isRequired,
};

export default Card;
