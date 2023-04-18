import { ReactNode } from "react";

export interface IGoalContext {
  threeMonths?: TGoal[];
  sixMonths?: TGoal[];
  nineMonths?: TGoal[];
  twelveMonths?: TGoal[];
  getGoals?: () => void;
  checkGoal?: (id: string) => void;
  deleteGoal?: (id: string) => void;
}

export interface IGoalProvider {
  children: ReactNode;
}

export type TGoal = {
  _id: string;
  checked: boolean;
  month: number;
  text: string;
  type: TGoalType;
}

export type TGoalType = 'education' | 'personal' | 'travel' | undefined;