import { MouseEvent, ReactNode } from "react";

import { TVariant } from "types";

export interface IButton {
  align?: "alignCenter" | "alignStart" | "alignEnd";
  autoFocus?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  handleClick?: (() => void) | ((event: MouseEvent) => void);
  label?: string;
  link?: string;
  round?: boolean;
  type?: 'button' | 'submit';
  variant?: TVariant;
}

export interface IAddButton {
  handleClick: any;
}

export interface ICloseButton {
  handleClick: () => void;
}