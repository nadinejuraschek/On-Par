import { ChangeEvent } from "react";

export interface IInput {
  className?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  handleChange: (event: ChangeEvent) => void;
  icon?: string;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  step?: string;
  value: string | number;
}

export interface IStyledInput {
  $fullWidth: boolean;
  $hasError: boolean;
  $hasIcon: boolean;
}
