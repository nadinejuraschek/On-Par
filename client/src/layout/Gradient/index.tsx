import { PropsWithChildren } from 'react';

export const LayoutGradient = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="gradient">
    { children }
  </div>
);