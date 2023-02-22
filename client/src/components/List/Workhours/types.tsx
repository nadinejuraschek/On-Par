import { Dayjs } from "dayjs";

export interface IWeeklyHours {
  data: any;
}

export interface IWeeklyItem {
  day: Dayjs;
  hours: TWorkhour[];
}

export type TWorkhour = {
  date: Date;
  total: number
}