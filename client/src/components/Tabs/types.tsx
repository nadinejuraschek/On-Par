import { TVariant } from "types";

export interface ITabs {
  activeTab: number | string;
  fullWidth?: boolean;
  handleClick: (value: number | string) => void;
  spaceBetween?: boolean;
  tabs: TTab[];
  variant: TVariant;
}

export type TTab = {
  disabled?: boolean;
  label: JSX.Element | string;
  value: number | string;
}