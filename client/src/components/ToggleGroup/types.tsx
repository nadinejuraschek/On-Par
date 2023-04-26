export interface IToggleGroup {
  className?: string;
  error?: string;
  handleChange: (val: string) => void;
  label?: string;
  name: string;
  options: TToggle[];
  value?: string;
}

export type TToggle = {
  icon?: string;
  label?: string;
  value: string;
}