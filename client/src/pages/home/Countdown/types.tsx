export interface ICountdown {
  endDate?: string;
  message?: string;
  setMessage: (value: string) => void;
  startDate: string;
}

export enum COUNTDOWN_TABS {
  DAYS = 0,
  WEEKS = 1,
  MONTHS = 2,
}