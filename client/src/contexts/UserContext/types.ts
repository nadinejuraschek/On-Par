export enum ACTIONS {
  SET_USER,
}

export interface IUserContext {
  user?: TUser | null;
}

export type TUserContextDispatchAction = {
  type: ACTIONS.SET_USER;
  payload?: TUser | null;
};

export type TUserPermissions = {
  shareBirthday: boolean;
  shareEmail: boolean;
  shareLastName: boolean;
};

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
  permissions: TUserPermissions;
  profileImage?: string;
  role?: string;
  startDate: string;
};