import { Dayjs } from "dayjs";
import { TWorkhour } from "types";

export interface IWorkhourDay {
  day: Dayjs;
  hours: TWorkhour[];
}

export interface IStyledHours {
  $isOvertime: boolean;
}