import { Text, NeetoInsights, UserCircle } from "@bigbinary/neeto-icons";

export const NAV_LINKS = [
  {
    icon: Text,
    label: "Notes",
    to: "/notes",
  },
  {
    icon: UserCircle,
    label: "Contacts",
    to: "/contacts",
  },
  {
    icon: NeetoInsights,
    label: "Somethng else",
    to: "/something_else",
  },
];
export const PROFILE_INFO = {
  imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
  name: "Oliver Smith",
  dropdownProps: [
    {
      label: "Edit",
    },
  ],
};
