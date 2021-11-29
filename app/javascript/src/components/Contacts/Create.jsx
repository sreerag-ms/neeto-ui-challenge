import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoIcons";
import { Pane, Typography, Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import formInitialValue from "constants/formInitialValues";
import formValidationSchema from "constants/formValidationSchemas";

import { ROLE_OPTIONS } from "./constants";

const CreateContact = ({ showPane, setShowPane, onSubmit }) => {
  return (
    <Pane onClose={() => setShowPane(false)} isOpen={showPane}>
      <Formik
        initialValues={formInitialValue.createContactForm}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={formValidationSchema.createContactForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <Pane.Header>
              <Typography style="h2" weight="semibold">
                Add New Contact
              </Typography>
            </Pane.Header>

            <Pane.Body>
              <div className="w-full flex flex-col ">
                <div className="flex flex-row w-full">
                  <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Enter first name"
                    className="my-4 pr-2"
                  />
                  <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Enter last name"
                    className="my-4"
                  />
                </div>
                <Input
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="Enter your email address"
                  className="my-4"
                />
                <Select
                  label="Role"
                  name="role"
                  placeholder="Select a role"
                  options={ROLE_OPTIONS}
                  className="my-4"
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
