export interface IModalSelectAvatar {
  handleClose: () => void;
  handleSave: (imgSource: string) => void;
  profileImageSrc?: string;
}
