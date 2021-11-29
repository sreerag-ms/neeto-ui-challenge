import * as Yup from "yup";

export const SIDE_MENU_ITEMS = {
  main: [
    { name: "All", count: 10, active: true },
    { name: "Archived", count: 5 },
    { name: "Completed", count: 5 },
    { name: "Phase 2", count: 5 },
  ],
};

export const TABLE_DATA = Array(21)
  .fill(null)
  .map((val, index) => ({
    key: index,
    name: `Some name ${index + 1}`,
    role: "Some role",
    imageUrl: index % 2 && "https://i.pravatar.cc/300",
    createdAt: 1637933588000,
    email: "mail@some.com",
  }));
export const ROLE_OPTIONS = [
  { value: "role-1", label: "Role One" },
  { value: "role-2", label: "Role Two" },
  { value: "role-3", label: "Role Three" },
];

export const CONTACT_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_VALIDATION_SCHEMA = Yup.object().shape({
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
});
