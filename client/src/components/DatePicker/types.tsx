import { Dispatch, SetStateAction } from "react";

import { Dayjs } from "dayjs";

export interface IDatePicker {
  setStartDate: Dispatch<SetStateAction<Date>>;
  startDate: Date;
}

export interface IMonth {
  currentDate: Date;
  handleCurrentDate: (date: Dayjs) => void;
}

export interface ICell {
  day: Date | Dayjs;
  formattedDate: string;
  handleDateClick: (date: Date | Dayjs) => void;
  monthStart: Date | Dayjs;
  selectedDate: Date;
}

export interface ICells {
  currentDate: Date;
  handleDateClick: (date: Date | Dayjs) => void;
  selectedDate: Date;
}