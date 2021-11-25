export const getTimeElapsed = date2 =>
  `Created ${Math.floor((Date.now() - date2) / 3600000)} hours ago`;

export const timeToDateAndMonth = date => {
  const dateAndMonth = new Date(date);
  return `${dateAndMonth.toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    hour12: true,
  })}`;
};
