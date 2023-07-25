export interface IWeeklyHours {
  data: TWorkhour[];
}

export type TWorkhour = {
  date: Date;
  total: number
}