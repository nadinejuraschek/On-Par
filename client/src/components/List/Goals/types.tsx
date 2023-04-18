import { TGoal, TGoalType } from "contexts/GoalContext/types";

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
  handleType: (value: TGoalType) => void;
  text: string;
  type: TGoalType;
}

export enum GOALTYPES {
  EDUCATION = 'education',
  PERSONAL = 'personal',
  TRAVEL = 'travel',
}