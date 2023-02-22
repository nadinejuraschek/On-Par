import { FC, SVGProps } from "react";

export interface INavLink {
  iconSrc?: string | FC<SVGProps<SVGSVGElement>>;
  label: string;
  link: string;
}