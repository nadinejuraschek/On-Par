import { Dispatch, SetStateAction } from 'react';

import { TVariant } from "types";

export interface ITabs {
  activeTab: number | string;
  fullWidth?: boolean;
  handleClick: Dispatch<SetStateAction<number | string>>;
  spaceBetween?: boolean;
  tabs: TTab[];
  variant: TVariant;
}

export type TTab = {
  disabled?: boolean;
  label: JSX.Element | string;
  value: number | string;
}