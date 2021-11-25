import React from "react";

import { Modal, Typography, Button } from "@bigbinary/neetoui/v2/";
import PropTypes from "prop-types";

const DeletePrompt = ({
  showPrompt,
  onDelete,
  onCancel,
  title = "Delete Item",
  message = "Are you sure you want to delete this?",
}) => {
  return (
    <Modal isOpen={showPrompt} onClose={onCancel}>
      <Modal.Header>
        <Typography style="h2">{title}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          {message}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={onDelete} size="large" />
        <Button style="text" label="Cancel" onClick={onCancel} size="large" />
      </Modal.Footer>
    </Modal>
  );
};

DeletePrompt.propTypes = {
  showPrompt: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
};
export default DeletePrompt;
