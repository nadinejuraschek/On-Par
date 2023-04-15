export interface IDatePicker {
  disabled?: boolean;
  format?: 'MM/dd/yyyy' | 'MM/dd/yyyy  hh:mma';
  onChange: (date: Date) => void;
  name: string;
  value: Date;
}