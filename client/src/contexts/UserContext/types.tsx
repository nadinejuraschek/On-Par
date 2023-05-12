import { ReactNode } from "react";

export interface IUserProvider {
  children: ReactNode;
}

export type TUser = {
  _id: string;
  birthday?: Date;
  country: string;
  email: string;
  endDate: string;
  familyID?: string;
  firstname: string;
  lastname: string;
  location?: string;
  permissions: {
    shareBirthday: boolean;
    shareEmail: boolean;
    shareLastName: boolean;
  };
  role?: string;
  startDate: string;
};
