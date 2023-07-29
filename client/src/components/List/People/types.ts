export interface IPeopleList {
  data: TPerson[];
  label: string;
}

export type TPerson = {
  birthday?: string;
  country?: string;
  name: string;
  profileImg: string;
  type: string;
}