import { FC, SVGProps } from "react";

export type TVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';

export type TResource = {
  icon: FC<SVGProps<SVGSVGElement>>,
  label: string;
  link?: string;
  active: boolean;
};

export type TPayment = {
  _id?: string;
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