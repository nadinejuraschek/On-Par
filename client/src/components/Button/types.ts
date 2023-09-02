import { MouseEvent, ReactNode } from "react";

import { TVariant } from "types";

export interface IButton {
  align?: "alignCenter" | "alignStart" | "alignEnd";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  handleClick?: (() => void) | ((event: MouseEvent) => void);
  label?: string;
  link?: string;
  loading?: boolean;
  round?: boolean;
  square?: boolean;
  type?: "button" | "submit";
  variant?: TVariant;
}

export interface IStyledButton {
  $align: "alignCenter" | "alignStart" | "alignEnd";
  className?: string;
  disabled?: boolean;
  $fullWidth?: boolean;
  loading?: boolean;
  $round?: boolean;
  $square?: boolean;
  type?: "button" | "submit";
  $variant?: TVariant;
}
