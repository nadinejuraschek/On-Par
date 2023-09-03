import { TGoalType } from "types";

export const getGoalIcon = (type: TGoalType): string => {
  switch (type) {
    case "education":
      return "education";
    case "travel":
      return "plane";
    default:
      return "user";
  }
};