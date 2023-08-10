import { TGoalFilter } from "hooks";

export interface IGoalsList {
  filter?: { label: string; value: "education" | "personal" | "travel"; };
  title: string;
  type: TGoalFilter;
}