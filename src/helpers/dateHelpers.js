import moment from "moment-timezone";

export const dateParser = (timestamp) => {
  const date = new Date(timestamp).toDateString();
  const timezone = moment.tz.guess();
  const time = moment.tz(timestamp, timezone).format("hh:mm a");
  return `${date} - ${time}`;
};
