import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoIcons";
import { Pane, Typography, Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  ROLE_OPTIONS,
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_VALIDATION_SCHEMA,
} from "./constants";

const CreateContact = ({ showPane, setShowPane, onSubmit }) => {
  return (
    <Pane onClose={() => setShowPane(false)} isOpen={showPane}>
      <Formik
        initialValues={CONTACT_FORM_INITIAL_VALUES}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
      >
        {({ isSubmitting }) => (
          <Form>
            <Pane.Header>
              <Typography style="h2" weight="semibold">
                Add New Contact
              </Typography>
            </Pane.Header>

            <Pane.Body>
              <div className="w-full flex flex-col space-y-8">
                <div className="flex flex-row w-full space-x-4">
                  <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Enter first name"
                  />
                  <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Enter last name"
                  />
                </div>
                <Input
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="Enter your email address"
                />
                <Select
                  label="Role"
                  name="role"
                  placeholder="Select a role"
                  options={ROLE_OPTIONS}
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
                loading={isSubmitting}
              />
              <Button
                style="text"
                label="Cancel"
                onClick={() => setShowPane(false)}
                size="large"
              />
            </Pane.Footer>
          </Form>
        )}
      </Formik>
    </Pane>
  );
};

export default CreateContact;
