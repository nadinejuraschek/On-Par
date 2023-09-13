import { TFontWeight } from "components/Text/types";

export interface IWeekhourDayCol {
  align?: "start" | "end";
  border?: boolean;
  color?: string;
  label: string;
  value: string;
  weight?: TFontWeight;
  withPadding?: boolean;
}