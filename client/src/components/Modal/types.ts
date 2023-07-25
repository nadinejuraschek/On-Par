import { PropsWithChildren, ReactNode } from "react";

export interface IModal extends PropsWithChildren {
  actions?: ReactNode;
  className?: string;
  handleClose: () => void;
  title?: string;
}

export interface IStyledHeader {
  hasTitle: boolean;
}