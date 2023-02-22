import { ICloseButton } from "./types";

export const CloseButton = ( { handleClick }: ICloseButton ): JSX.Element => (
  <button className="circular ui icon button" onClick={ handleClick }>
    <i className="close icon"></i>
  </button>
);
