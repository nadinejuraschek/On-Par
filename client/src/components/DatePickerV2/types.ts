export interface IDatePicker {
  disabled?: boolean;
  error?: string;
  format?: 'MM/dd/yyyy' | 'MM/dd/yyyy  hh:mma';
  fullWidth?: boolean;
  icon?: string;
  label: string;
  onChange: (date: Date) => void;
  name: string;
  value: Date;
}