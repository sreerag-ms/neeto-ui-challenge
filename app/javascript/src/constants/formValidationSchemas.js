import * as Yup from "yup";

export default {
  createNoteForm: Yup.object().shape({
    title: Yup.string()
      .max(100, "Maximum 100 charecters")
      .trim()
      .required("Required"),
    description: Yup.string()
      .max(500, "Maximum 500 charecters")
      .trim()
      .required("Required"),
    contact: Yup.object().required("Required").nullable(),
    tags: Yup.array().min(1, "Select atleast one item").required("Required"),
  }),
  createContactForm: Yup.object().shape({
    firstName: Yup.string()
      .max(50, "Maximum 100 charecters")
      .trim()
      .required("Required"),
    lastName: Yup.string()
      .max(50, "Maximum 100 charecters")
      .trim()
      .required("Required"),
    email: Yup.string().trim().email("Invalid email").required("Required"),
    role: Yup.object().required("Required").nullable(),
  }),
};
