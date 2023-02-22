export interface IText {
  as?: TElement;
  children: string | string[] | JSX.Element | JSX.Element[];
  className?: string;
  color?: string;
  htmlFor?: string;
  size?: TSize;
  weight?: TWeight;
}

type TElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div";

type TSize = "xs" | "sm" | "md" | "lg" | "xl";

type TWeight = "bold" | "regular";