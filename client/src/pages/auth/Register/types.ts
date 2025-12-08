import { Dispatch, SetStateAction } from "react";

export interface IRegister {
  handleView: Dispatch<SetStateAction<number>>;
}

export type TRegisterUser = {
  country: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: string;
  startDate: Date;
}