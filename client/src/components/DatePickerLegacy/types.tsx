import { Dispatch, SetStateAction } from "react";

import { Dayjs } from "dayjs";

export interface IDatePicker {
  setStartDate: Dispatch<SetStateAction<any>>;
  startDate: Date | Dayjs;
}

export interface IMonth {
  currentDate: Date | Dayjs;
  handleCurrentDate: (date: Dayjs) => void;
}

export interface ICell {
  day: Date | Dayjs;
  formattedDate: string;
  handleDateClick: (date: Date | Dayjs) => void;
  monthStart: Date | Dayjs;
  selectedDate: Date | Dayjs;
}

export interface ICells {
  currentDate: Date | Dayjs;
  handleDateClick: (date: Date | Dayjs) => void;
  selectedDate: Date | Dayjs;
}