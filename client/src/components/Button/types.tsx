import { ReactNode } from "react";
import { TVariant } from "types";

export interface IButton {
  align?: "alignCenter" | "alignStart" | "alignEnd";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick?: () => void;
  label?: string;
  link?: string;
  round?: boolean;
  variant?: TVariant;
}

export interface IAddButton {
  handleClick: any;
}

export interface ICloseButton {
  handleClick: () => void;
}
