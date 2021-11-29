import dayjs from "dayjs"; // load on demand

export const getTimeElapsed = date =>
  `${dayjs(Date.now()).diff(date, "hour")} hours ago`;

export const timeToHourAndDay = date => dayjs(date).format("dddd, h A");

export const timeToDate = date => dayjs(date).format("MMM, D, YYYY");
