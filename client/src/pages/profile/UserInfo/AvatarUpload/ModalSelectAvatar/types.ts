import { TSelectOption } from "components/Select/types";

export interface IModalSelectAvatar {
  handleClose: () => void;
  handleSave: (imgSource: string) => void;
  profileImageSrc?: string;
}
