import { ChangeEvent } from "react";

export interface ITextarea {
  className?: string;
  error?: string;
  fullWidth?: boolean;
  handleChange: (event: ChangeEvent) => void;
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  value: string;
}

export interface IStyledTextarea {
  fullWidth: boolean;
  hasError: boolean;
}