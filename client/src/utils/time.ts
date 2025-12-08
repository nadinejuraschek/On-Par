import "dayjs/locale/en";
import * as dayjs from "dayjs";
import * as dayjsDuration from "dayjs/plugin/duration";
import * as updateLocale from "dayjs/plugin/updateLocale";

dayjs.locale("en");
dayjs.extend(dayjsDuration);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekdaysShort: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ],
});

const getAge = (date: Date): string => {
  const currentDate = dayjs();
  const dateObj = dayjs(date);

  const weeks = currentDate.diff(dateObj, "weeks");
  const months = currentDate.diff(dateObj, "months");
  const years = currentDate.diff(dateObj, "years");

  if (weeks < 1) {
    const days = currentDate.diff(dateObj, "days");
    return `${days} day(s) old`;
  } else if (months < 1) {
    return `${weeks} week(s) old`;
  } else if (years < 1) {
    return `${months} month(s) old`;
  } else {
    return `${years} year(s) old`;
  }
};

const convertHours = (time: string): string => {
  if (!time || typeof time !== "string") {
    return "0.00";
  }

  const hoursMinutes = time.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0], 10) || 0;
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) || 0 : 0;

  return (hours + minutes / 60).toFixed(2);
};

const minToH = (time: number): string => {
  if (isNaN(time) || !isFinite(time)) {
    return "00:00";
  }

  const totalMinutes = Math.abs(time);
  const roundedH = Math.floor(totalMinutes / 60);
  const min = Math.round(totalMinutes % 60);

  return `${String(roundedH).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
};

const minToHandMin = (time: number): string => {
  if (isNaN(time) || !isFinite(time)) {
    return "0h 00min";
  }

  const totalMinutes = Math.abs(time);
  const roundedH = Math.floor(totalMinutes / 60);
  const min = Math.round(totalMinutes % 60);
  const roundedMin = String(min).padStart(2, "0");

  return `${roundedH}h ${roundedMin}min`;
};

const duration = (start: dayjs.Dayjs, end: dayjs.Dayjs): string => {
  // Calculate duration from start to end (positive value)
  const minutes = Math.abs(end.diff(start, "minutes"));
  return minToH(minutes);
};

export const TimeUtils = {
  convertHours,
  duration,
  getAge,
  minToH,
  minToHandMin,
};
