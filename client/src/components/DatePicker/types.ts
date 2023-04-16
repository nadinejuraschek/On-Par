export interface IDatePicker {
  disabled?: boolean;
  error?: string;
  format?: 'MM/dd/yyyy' | 'MM/dd/yyyy  hh:mma' | 'hh:mma';
  fullWidth?: boolean;
  handleChange: (date: Date) => void;
  icon?: string;
  label: string;
  name: string;
  value: Date;
}