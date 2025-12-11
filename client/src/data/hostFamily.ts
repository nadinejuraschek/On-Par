import { EVENT_TYPE, TEvent } from "components/Event/types";
import { TPerson } from "components/List/People/types";

export const mockHostChildren: TPerson[] = [
  {
    type: "hostchild",
    name: "Sophie",
    birthday: "2013-01-30T22:00:00.000Z",
    profileImg: "",
  },
  {
    type: "hostchild",
    name: "Jacob",
    birthday: "2017-06-03T22:00:00.000Z",
    profileImg: "",
  },
  {
    type: "hostchild",
    name: "Liam",
    birthday: "2020-04-09T22:00:00.000Z",
    profileImg: "",
  },
];

export const mockHostParents: TPerson[] = [
  {
    type: "hostparent",
    name: "Olivia",
    birthday: "1985-04-23T22:00:00.000Z",
    profileImg: "",
  },
  {
    type: "hostparent",
    name: "Kyle",
    birthday: "1983-11-15T22:00:00.000Z",
    profileImg: "",
  },
];

export const mockBirthdays: TEvent[] = [
  {
    name: "Sophie's Birthday",
    day: 30,
    month: 1,
    year: 2013,
    type: EVENT_TYPE.BIRTHDAY,
  },
  {
    name: "Jacob's Birthday",
    day: 3,
    month: 6,
    year: 2017,
    type: EVENT_TYPE.BIRTHDAY,
  },
  {
    name: "Liam's Birthday",
    day: 9,
    month: 4,
    year: 2020,
    type: EVENT_TYPE.BIRTHDAY,
  },
  {
    name: "Olivia's Birthday",
    day: 23,
    month: 4,
    year: 1985,
    type: EVENT_TYPE.BIRTHDAY,
  },
  {
    name: "Kyle's Birthday",
    day: 15,
    month: 11,
    year: 1983,
    type: EVENT_TYPE.BIRTHDAY,
  },
];
