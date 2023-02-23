import { ICard } from "./types";
import styles from "./card.module.css";

export const Card = ( { children, className = "", withHover = false }: ICard ): JSX.Element => (
  <div className={ `${ className } ${ styles.card } ${ withHover && styles.hover }` }>
    { children }
  </div>
);
