export interface IDateInput {
  date: Date;
  handleChange: () => void;
  icon: string;
  label: string;
}

export interface IInput {
  error: string;
  handleChange: (value: string) => void;
  icon: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
}

export interface ITime {
  end: string;
  handleEnd: (value: string) => void;
  handleStart: (value: string) => void;
  start: string;
}

export interface IProfileInput {
  edit: boolean;
  handleChange: (value: string) => void;
  icon: string;
  label: string;
  name: string;
  value: string;
}