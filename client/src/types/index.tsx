import { FC, SVGProps } from "react";

export type TVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';

export type TResource = {
  icon: FC<SVGProps<SVGSVGElement>>,
  label: string;
  link?: string;
  active: boolean;
};
