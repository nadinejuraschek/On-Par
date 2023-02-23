import {FC, SVGProps} from 'react';

export interface IFeatureCard {
  header: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
  link: string;
  title: string;
}