import { FC, SVGProps } from "react";

export type TVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';

export type TResource = {
  icon: FC<SVGProps<SVGSVGElement>>,
  label: string;
  link?: string;
  active: boolean;
};

export type TPayment = {
  date: Date | null;
  _id: string;
  late: boolean;
  paid: boolean;
  week: number;
};