import { Dayjs } from "dayjs";

export interface IModalAddHours {
  day: Dayjs;
  handleClose: () => void;
}