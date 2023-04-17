import { GroupBase, OptionsOrGroups } from 'react-select';

export interface ISelect {
  className?: string;
  clearable?: boolean;
  disabled?: boolean;
  error?: string;
  handleChange: (option: TSelectOption) => void;
  icon?: string;
  label: string;
  loading?: boolean;
  name: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  searchable?: boolean;
  value: TSelectOption;
}

export type TSelectOption = { label: string, value: string };