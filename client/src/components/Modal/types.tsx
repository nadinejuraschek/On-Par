import { ReactNode } from 'react';

export interface IModal {
  actions?: ReactNode;
  children: ReactNode;
  handleClose: () => void;
  title?: string;
}