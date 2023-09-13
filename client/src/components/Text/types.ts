import { ReactNode } from "react";

export interface IText {
  as?: TElement;
  children: ReactNode;
  className?: string;
  color?: string;
  disabled?: boolean;
  htmlFor?: string;
  size?: TSize;
  weight?: TFontWeight;
}

type TElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div";

export type TSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TFontWeight = "bold" | "regular";

export interface IStyledText {
  $color: string;
  $size: TSize;
  $weight: TFontWeight;
}