import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Typography, Button } from "@bigbinary/neetoui/v2";
import { Input, Textarea, Select } from "@bigbinary/neetoui/v2/formik";
import { Formik, Form } from "formik";

import formInitialValue from "constants/formInitialValues";
import formValidationSchema from "constants/formValidationSchemas";

import { CONTACT_OPTIONS, TAG_OPTIONS } from "../constants";

function CreateNote({ showPane, setShowCreatePane, createNote }) {
  const onSubmit = values => {
    const note = {
      title: values.title,
      description: values.description,
      createdAt: Date.now().toString(),
      user: { imageUrl: "https://i.pravatar.cc/300" },
    };
    createNote(note);
  };

  return (
    <Pane onClose={() => setShowCreatePane(false)} isOpen={showPane}>
      <Formik
        initialValues={formInitialValue.createNoteForm}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={formValidationSchema.createNoteForm}
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
                  placeholder="New Title"
                  className="my-4"
                />
                <Textarea
                  name="description"
                  label="Description"
                  placeholder="Whats happening"
                  rows={1}
                  className="my-4"
                />
                <Select
                  label="Assigned Contact"
                  name="contact"
                  options={CONTACT_OPTIONS}
                  className="my-4"
                />
                <Select
                  label="Tags"
                  name="tags"
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
                label="Save"
                size="large"
                style="primary"
                className="ml-2"
                loading={isSubmitting}
              />
              <Button
                style="text"
                label="Cancel"
                onClick={() => setShowCreatePane(false)}
                size="large"
              />
            </Pane.Footer>
          </Form>
        )}
      </Formik>
    </Pane>
  );
}

export default CreateNote;
