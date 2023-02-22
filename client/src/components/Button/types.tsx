import { TVariant } from "types";

export interface IButton {
  align?: "alignCenter" | "alignStart" | "alignEnd";
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  disabled?: boolean;
  handleClick: () => void;
  label?: string;
  link?: string;
  round?: boolean;
  variant?: TVariant;
}

export interface IAddButton {
  handleClick: () => void;
}

export interface ICloseButton {
  handleClick: () => void;
}
