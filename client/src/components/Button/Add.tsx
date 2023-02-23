import { IAddButton } from "./types";

export const AddButton = ( { handleClick }: IAddButton ): JSX.Element => (
  <button className="circular ui icon button" onClick={ handleClick }>
    <i className="plus icon"></i>
  </button>
);
