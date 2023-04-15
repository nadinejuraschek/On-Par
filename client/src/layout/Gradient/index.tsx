import { ReactNode } from 'react';
import styles from './gradient.module.css';

export const LayoutGradient = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={ styles.gradient }>
    { children }
  </div>
);