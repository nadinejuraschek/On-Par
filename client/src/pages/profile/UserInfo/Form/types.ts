import { TUser } from "contexts/UserContext/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";


export interface IForm {
  formData: TUser;
  handleInputChange: (e: ChangeEvent, field: string) => void;
  setFormData: Dispatch<SetStateAction<TUser>>;
}