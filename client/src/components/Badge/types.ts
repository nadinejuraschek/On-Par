import { ReactNode } from "react";
import { TGoalType } from "types";

export interface IBadge {
  className?: string;
  icon?: ReactNode;
  label?: string;
  variant?: TGoalType;
}

export interface IStyledBadge {
  $variant?: TGoalType;
}
