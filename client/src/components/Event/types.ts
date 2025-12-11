export enum EVENT_TYPE {
  BIRTHDAY = "birthday",
  HOLIDAY = "holiday",
  OTHER = "other",
}

export interface IEvent {
  className?: string;
  day: number;
  name: string;
  type?: TEventType;
}

export type TEvent = {
  day: number;
  month: number;
  name: string;
  year?: number;
  type: TEventType;
};

export type TEventType = EVENT_TYPE.BIRTHDAY | EVENT_TYPE.HOLIDAY | EVENT_TYPE.OTHER;

export interface IStyledEvent {
  $type: TEventType;
}