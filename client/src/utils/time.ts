import "dayjs/locale/en";

import * as dayjs from "dayjs";

const dayjsDuration = require("dayjs/plugin/duration");

dayjs.locale("en");
dayjs.extend(dayjsDuration);

const getAge = (date: Date): string => {
  const currentDate = dayjs(new Date());

  let age: string;

  if (currentDate.diff(date, "weeks") < 1) {
    age = currentDate.diff(date, "days") + " day(s) old";
  } else if (currentDate.diff(date, "months") < 1) {
    age = currentDate.diff(date, "weeks") + " week(s) old";
  } else if (currentDate.diff(date, "years") < 1) {
    age = currentDate.diff(date, "months") + " month(s) old";
  } else if (currentDate.diff(date, "years") > 1) {
    age = currentDate.diff(date, "years") + " year(s) old";
  }

  return age;
};

const convertHours = (time: string): string => {
  const hoursMinutes = time.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0], 10);
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return (hours + minutes / 60).toFixed(2);
};

const minToH = (time: number): string => {
  const h = (time / 60);
  const roundedH = Math.floor(h);
  const min = (h - roundedH) * 60;
  const roundedMin = ("0" + Math.round(min)).slice(-2);
  return `${roundedH}:${roundedMin}`;
};

const minToHandMin = (time: number): string => {
  const h = (time / 60);
  const roundedH = Math.floor(h);
  const min = (h - roundedH) * 60;
  const roundedMin = ("0" + Math.round(min)).slice(-2);
  return `${roundedH}h ${roundedMin}min`;
};

const duration = (start: dayjs.Dayjs, end: dayjs.Dayjs): string => {
  return minToH(start.diff(end, "minutes"));
};

export const TimeUtils = {
  convertHours,
  duration,
  getAge,
  minToH,
  minToHandMin,
};
