import * as Yup from "yup";

export default {
  createNoteForm: Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    contact: Yup.object().required("Required").nullable(),
    tags: Yup.array().min(1, "Select atleast one item").required("Required"),
  }),
};
