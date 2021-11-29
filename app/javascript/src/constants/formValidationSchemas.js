import * as Yup from "yup";

export default {
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
