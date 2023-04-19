import { TGoalType } from "contexts/GoalContext/types";

export interface IGoalItem {
  checked: boolean;
  handleCheck: () => void;
  label: string;
  type?: TGoalType;
}