import { Dayjs } from "dayjs";
import { TWorkhour } from "types";

export interface IWeeklyItem {
  day: Dayjs;
  hours: TWorkhour[];
}

export interface IStyledHours {
  isOvertime: boolean;
}