import { GroupBase, OptionsOrGroups } from "react-select";

export interface ISelect {
  className?: string;
  clearable?: boolean;
  defaultValue?: TSelectOption;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  handleChange: (option: TSelectOption) => void;
  icon?: string;
  label?: string;
  loading?: boolean;
  name: string;
  onlyInput?: boolean;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  placeholder?: string;
  searchable?: boolean;
  value: TSelectOption;
}

export type TSelectOption = { label: string, value: string };

export interface IStyledField {
  fullWidth: boolean;
  hasError: boolean;
}