export const getTimeElapsed = date2 =>
  `Created ${Math.floor((Date.now() - date2) / 3600000)} hours ago`;

export const timeToHourAndDay = date =>
  new Date(date).toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    hour12: true,
  });
export const timeToDate = date =>
  new Date(date).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
