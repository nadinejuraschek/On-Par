import { ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
  className?: string;
  withHover?: boolean;
}