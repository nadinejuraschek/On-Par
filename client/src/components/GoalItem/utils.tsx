import education from "images/education.svg";
import personal from "images/personal.svg";
import travel from "images/travel.svg";
import { TGoalType } from "types";

export const getGoalIcon = (type: TGoalType) => {
  switch (type) {
  case "education":
    return education;
  case "travel":
    return travel;
  default:
    return personal;
  }
};