import { TGoalType } from "types";

export interface IAddGoalModal {
  checked: boolean;
  dueDate?: Date;
  id: string;
  text: string;
  type: TGoalType;
  toggleModal: () => void;
}