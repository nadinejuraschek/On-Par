export interface IEvent {
  day: number;
  name: string;
  type?: TEventType;
}

export type TEvent = {
  day: number;
  month: number;
  name: string;
  year?: number;
  type?: TEventType;
};

export type TEventType = 'birthday' | 'holiday';
