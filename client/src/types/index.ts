import { FC, SVGProps } from "react";

export type TVariant = "primary" | "secondary" | "tertiary" | "danger" | "warning";

export type TGoalType = "education" | "personal" | "travel";

export type TResource = {
  icon: FC<SVGProps<SVGSVGElement>>,
  label: string;
  link?: string;
  active: boolean;
};

export type TGoal = {
  _id: string;
  checked: boolean;
  dueDate?: Date;
  month?: number;
  text: string;
  type: TGoalType;
}

export type TWorkhour = {
  _id: string;
  date: Date;
  hours: {
    _id: string;
    duration: number;
    end: Date;
    start: Date;
  }[];
  total: number;
}

export type TPayment = {
  _id?: string;
  amount: number | null;
  date: Date | null;
  late: boolean;
  paid: boolean;
  week: number;
};

export type TNote = {
  _id?: string;
  date: string;
  text: string;
  title: string;
};