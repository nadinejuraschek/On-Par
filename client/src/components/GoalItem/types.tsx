import { TGoalType } from "types";

export interface IGoalItem {
  checkable?: boolean;
  checked: boolean;
  deletable?: boolean;
  dueDate?: Date;
  editable?: boolean;
  id: string;
  label: string;
  text: string;
  type: TGoalType;
}