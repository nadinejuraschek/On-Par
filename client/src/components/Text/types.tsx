import { ReactNode } from 'react';

export interface IText {
  as?: TElement;
  children: ReactNode;
  className?: string;
  color?: string;
  htmlFor?: string;
  size?: TSize;
  weight?: TWeight;
}

type TElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div";

export type TSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type TWeight = "bold" | "regular";