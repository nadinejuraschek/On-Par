import { TGoal } from "contexts/GoalContext/types";

export interface IGoalsList {
  className?: string;
  data: any;
  month: number;
}

export interface IGoalItem {
  handleCheck: (id: string) => void;
  item: TGoal;
}

export interface IAddGoal {
  handleText: (value: string) => void;
  handleType: (value: string) => void;
  text: string;
  type: string;
}
