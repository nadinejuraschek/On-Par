import { TUserPermissions } from "contexts/UserContext/types";
import { ChangeEvent } from "react";

export interface IPermissions {
  handleCheckboxChange: (e: ChangeEvent, field: string) => void;
  permissions: TUserPermissions;
}