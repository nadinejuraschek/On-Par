import { Dayjs } from "dayjs";
import { TWorkhour } from "types";

export interface IWorkhourDay {
  day: Dayjs;
  hours: TWorkhour[];
}
