import { TGoalType } from "contexts/GoalContext/types";

export interface IAddGoalModal {
  checked: boolean;
  dueDate?: string;
  id: string;
  text: string;
  type: TGoalType;
  toggleModal: () => void;
}