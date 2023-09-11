import { Dayjs } from "dayjs";
import { TWorkhour } from "types";

export interface IWorkhourList {
  endDate: Dayjs;
  hours: TWorkhour[];
  startDate: Dayjs;
}