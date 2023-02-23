export interface IPeopleList {
  data: any;
  label: string;
}

export interface IPeopleItem {
  person: TPerson;
}

export type TPerson = {
  birthday: string;
  country: string;
  name: string;
  profileImg: string;
  type: string;
}