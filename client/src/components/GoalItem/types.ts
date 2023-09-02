import { TGoalType } from "types";

export interface IGoalItem {
  checkable?: boolean;
  checked: boolean;
  className?: string;
  deletable?: boolean;
  dueDate?: Date;
  editable?: boolean;
  id: string;
  label: string;
  text: string;
  type: TGoalType;
}

export interface IStyledItem {
  $isChecked: boolean;
  $isOverdue: boolean;
}

export interface IStyledLabel {
  $isChecked: boolean;
}