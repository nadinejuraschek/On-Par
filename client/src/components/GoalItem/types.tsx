import { TGoalType } from "contexts/GoalContext/types";

export interface IGoalItem {
  checked: boolean;
  dueDate?: string;
  handleCheck: () => void;
  label: string;
  type?: TGoalType;
}