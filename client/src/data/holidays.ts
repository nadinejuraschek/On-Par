import { TEvent } from "components/Event/types";
import * as dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);

const currentYear = new Date().getFullYear();

/* https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343 */
const getEaster = () => {
  const f = Math.floor,
    // Golden Number - 1
    G = currentYear % 19,
    C = f(currentYear / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
    // weekday for the Paschal full moon
    J = (currentYear + f(currentYear / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40)/44),
    day = L + 28 - 31 * f(month / 4);

  return [month,day];
}

const getDatesOfDayOfWeek = (year: number, month: number, dayOfWeek: number) => {
  const initialDate = new Date(year, month, 1);

  const datesOfDayOfWeek = [];

  while (initialDate.getDay() !== dayOfWeek) {
    initialDate.setDate(initialDate.getDate() + 1);
  }

  while (initialDate.getMonth() === month) {
    const nextDate = new Date(initialDate.getTime());
    datesOfDayOfWeek.push(nextDate.getDate());
    initialDate.setDate(initialDate.getDate() + 7);
  }

  return datesOfDayOfWeek;
}

// TODO: integrate more religious holidays (e.g. jewish)
export const holidays: TEvent[] = [
  {
    name: "New Year's Day",
    day: 1,
    month: 0,
    type: "holiday",
  },
  {
    name: "Martin Luther King Jr. Day",
    day: getDatesOfDayOfWeek(currentYear, 0, 1)[2], // third Monday in January
    month: 0,
    type: "holiday",
  },
  {
    name: "Valentine's Day",
    day: 14,
    month: 1,
    type: "holiday",
  },
  {
    name: "President's Day",
    day: getDatesOfDayOfWeek(currentYear, 1, 1)[2], // third Monday in February
    month: 1,
    type: "holiday",
  },
  {
    name: "St. Patrick's Day",
    day: 17,
    month: 2,
    type: "holiday",
  },
  {
    name: "Easter Sunday",
    day: getEaster()[1],
    month: getEaster()[0],
    type: "holiday",
  },
  {
    name: "Easter Monday",
    day: getEaster()[1] + 1,
    month: getEaster()[0],
    type: "holiday",
  },
  {
    name: "Tax Day",
    day: 15,
    month: 3,
    type: "holiday",
  },
  {
    name: "Cinco de Mayo",
    day: 5,
    month: 4,
    type: "holiday",
  },
  {
    name: "Mother's Day",
    day: getDatesOfDayOfWeek(currentYear, 4, 0)[1], // second Sunday in May
    month: 4,
    type: "holiday",
  },
  {
    name: "Memorial Day",
    day: getDatesOfDayOfWeek(currentYear, 4, 1).pop(), // last Monday in May
    month: 4,
    type: "holiday",
  },
  {
    name: "Father's Day",
    day: getDatesOfDayOfWeek(currentYear, 4, 0)[2], // third Sunday in June
    month: 5,
    type: "holiday",
  },
  {
    name: "Juneteenth",
    day: 19,
    month: 5,
    type: "holiday",
  },
  {
    name: "Independence Day",
    day: 4,
    month: 6,
    type: "holiday",
  },
  {
    name: "Labor Day",
    day: getDatesOfDayOfWeek(currentYear, 8, 1)[0], // first Monday in September
    month: 8,
    type: "holiday",
  },
  {
    name: "Columbus Day",
    day: getDatesOfDayOfWeek(currentYear, 10, 4)[3], // second Monday in October
    month: 9,
    type: "holiday",
  },
  {
    name: "Halloween",
    day: 31,
    month: 9,
    type: "holiday",
  },
  {
    name: "Election Day",
    day: getDatesOfDayOfWeek(currentYear, 10, 1)[0] + 1, // Tuesday following the first Monday in November
    month: 10,
    type: "holiday",
  },
  {
    name: "Veteran's Day",
    day: getDatesOfDayOfWeek(currentYear, 10, 1)[3], // fourth Monday in October
    month: 10,
    type: "holiday",
  },
  {
    name: "Thanksgiving",
    day: getDatesOfDayOfWeek(currentYear, 10, 4)[3], // fourth Thursday in November
    month: 10,
    type: "holiday",
  },
  {
    name: "Black Friday",
    day: getDatesOfDayOfWeek(currentYear, 10, 4)[3] + 1,
    month: 10,
    type: "holiday",
  },
  {
    name: "Christmas Eve",
    day: 24,
    month: 11,
    type: "holiday",
  },
  {
    name: "Christmas Day",
    day: 25,
    month: 11,
    type: "holiday",
  },
  {
    name: "New Year's Eve",
    day: 31,
    month: 11,
    type: "holiday",
  },
];
