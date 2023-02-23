import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

import { Dayjs } from 'dayjs';

export interface IDateInput {
  date: Date | Dayjs;
  handleChange: Dispatch<SetStateAction<any>>;
  icon: string;
  label: string;
  name: string;
  value?: Date | Dayjs;
}

export interface IInput {
  className?: string;
  error?: string;
  handleChange: (value: string) => void;
  icon?: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
}

export interface ITime {
  end: string;
  handleEnd: any;
  handleStart: any;
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