import { ChangeEvent } from "react";
import { TUserPermissions } from "contexts/UserContext/types";

export interface IPermissions {
  handleCheckboxChange: (e: ChangeEvent, field: string) => void;
  permissions: TUserPermissions;
}