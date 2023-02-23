export interface ICountdown {
  endDate?: string;
  message?: string;
  setMessage: (value: string) => void;
  startDate: string;
}