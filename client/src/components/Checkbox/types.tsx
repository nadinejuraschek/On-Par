import { ChangeEvent } from 'react';

export interface ICheckbox {
  className?: string;
  error?: string;
  handleChange: (event: ChangeEvent) => void;
  label: string;
  name: string;
  value: boolean;
}