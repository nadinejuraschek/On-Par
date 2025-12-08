import { TGoalFilter } from "api";
import { TGoalType } from "types";

export interface IGoalsList {
  filter: TGoalFilter;
  title: string;
  type?: TGoalType;
}