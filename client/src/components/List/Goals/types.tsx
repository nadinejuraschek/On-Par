export interface IGoalsList {
  className?: string;
  data: any;
  month: number;
}

export interface IGoalItem {
  handleCheck: (id: string) => void;
  item: TGoalItem;
}

export interface IAddGoal {
  handleText: (value: string) => void;
  handleType: (value: string) => void;
  text: string;
  type: string;
}

export type TGoalItem = {
  _id: string;
  checked: boolean;
  text: string;
  type: string;
}