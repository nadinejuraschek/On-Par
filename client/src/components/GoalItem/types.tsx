import { TGoalType } from "contexts/GoalContext/types";

export interface IGoalItem {
  checkable?: boolean;
  checked: boolean;
  deletable?: boolean;
  dueDate?: string;
  editable?: boolean;
  id: string;
  label: string;
  type?: TGoalType;
}