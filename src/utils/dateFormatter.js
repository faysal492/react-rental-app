import moment from "moment";

const momentFormat = (date) => moment(date.replace(/-/g, " "), "YYYY MM DD");

const calBetweenDays = (dateStrings) => {
  let start = momentFormat(dateStrings[0]);
  let end = momentFormat(dateStrings[1]);
  let days = end.diff(start, "days");
  return days;
};

export { calBetweenDays };
