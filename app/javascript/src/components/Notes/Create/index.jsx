import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoIcons";
import { Pane, Typography, Button } from "neetoui/v2";
import { Input, Textarea, Select } from "neetoui/v2/formik";
import PropTypes from "prop-types";

import {
  CONTACT_OPTIONS,
  TAG_OPTIONS,
  NOTE_FORM_VALIDATION_SCHEMA,
  NOTE_FORM_INITIAL_VALUES,
} from "../constants";

const CreateNote = ({ isCreatePaneOpen, setIsCreatePaneOpen, createNote }) => {
  const onSubmit = values => {
    const note = {
      title: values.title.trim(),
      description: values.description.trim(),
      createdAt: Date.now().toString(),
      user: { imageUrl: "https://i.pravatar.cc/300" },
    };
    createNote(note);
  };

  return (
    <Pane onClose={() => setIsCreatePaneOpen(false)} isOpen={isCreatePaneOpen}>
      <Formik
        initialValues={NOTE_FORM_INITIAL_VALUES}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={NOTE_FORM_VALIDATION_SCHEMA}
      >
        {({ isSubmitting }) => (
          <Form>
            <Pane.Header>
              <Typography style="h2" weight="semibold">
                Add New Note
              </Typography>
            </Pane.Header>
            <Pane.Body className="w-full">
              <div className="w-full flex flex-col ">
                <Input
                  name="title"
                  type="text"
                  label="Title"
                  placeholder="Enter a title"
                  className="my-4"
                />
                <Textarea
                  name="description"
                  label="Description"
                  placeholder="Enter note description"
                  rows={1}
                  className="my-4"
                />
                <Select
                  label="Assigned Contact"
                  name="contact"
                  placeholder="Select Role"
                  options={CONTACT_OPTIONS}
                  className="my-4"
                />
                <Select
                  label="Tags"
                  name="tags"
                  placeholder="Select Tags"
                  options={TAG_OPTIONS}
                  className="my-4"
                  isMulti
                />
              </div>
            </Pane.Body>
            <Pane.Footer className="space-x-2 border-2 shadow-none">
              <Button
                icon={Check}
                type="submit"
                label="Save Changes"
                size="large"
                style="primary"
                className="ml-2"
                loading={isSubmitting}
              />
              <Button
                style="text"
                label="Cancel"
                onClick={() => setIsCreatePaneOpen(false)}
                size="large"
              />
            </Pane.Footer>
          </Form>
        )}
      </Formik>
    </Pane>
  );
};

CreateNote.propTypes = {
  isCreatePaneOpen: PropTypes.bool.isRequired,
  setIsCreatePaneOpen: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired,
};
export default CreateNote;
