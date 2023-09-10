import { PropsWithChildren } from "react";

export interface IFormField extends PropsWithChildren {
  className?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: string;
  label?: string;
  name: string;
}

export interface IStyledField {
  $fullWidth: boolean;
}