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
