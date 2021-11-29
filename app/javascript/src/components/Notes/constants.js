import * as Yup from "yup";

export const SIDE_MENU_ITEMS = {
  main: [
    { name: "All", count: 30, active: true },
    { name: "Users", count: 5 },
    { name: "Leads", count: 5 },
    { name: "Visitors", count: 5 },
  ],
  segments: [
    { name: "Europe", count: 10 },
    { name: "Middle East", count: 10 },
    { name: "Asia", count: 10 },
  ],
  tags: [
    { name: "Sales", count: 10 },
    { name: "Finance", count: 10 },
    { name: "User Experience", count: 10 },
  ],
};

export const NOTES_DATA = [
  {
    title: "Title for this note",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting . He glanced at it and chuckled under his breath',
    createdAt: "1637803354000",
    user: { imageUrl: "https://i.pravatar.cc/300" },
  },
  {
    title: "Note 2 title",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting . He glanced at it and chuckled under his breath',
    createdAt: "1637823352000",
    user: { imageUrl: "https://i.pravatar.cc/300" },
  },
  {
    title: "Note 3 title",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting . He glanced at it and chuckled under his breath',
    createdAt: "1637821354000",
    user: { imageUrl: "https://i.pravatar.cc/300" },
  },
  {
    title: "Note 5 title",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting . He glanced at it and chuckled under his breath',
    createdAt: "1637823354000",
    user: { imageUrl: "https://i.pravatar.cc/300" },
  },
  {
    title: "Note 5 title",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting . He glanced at it and chuckled under his breath',
    createdAt: "1637823254000",
    user: { imageUrl: "https://i.pravatar.cc/300" },
  },
];

export const CONTACT_OPTIONS = [
  { value: "contact1", label: "Oliver" },
  { value: "contact2", label: "Sam" },
  { value: "contact3", label: "Eva" },
];

export const TAG_OPTIONS = [
  { value: "reminder", label: "Reminder" },
  { value: "shopping", label: "Shopping" },
  { value: "news", label: "News" },
  { value: "important", label: "Important" },
];

export const NOTE_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: [],
};

export const NOTE_FORM_VALIDATION_SCHEMA = Yup.object().shape({
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
});
