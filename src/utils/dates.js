import { format } from "timeago.js";
export const FormatDates = {
  getTime: (timestamp) => {
    return format(timestamp);
  },
};
