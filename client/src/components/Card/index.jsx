import styles from "./card.module.css";

export const Card = ( { children, className = "", withHover = false } ) => (
  <div className={ `${ className } ${ styles.card } ${ withHover && styles.hover }` }>
    { children }
  </div>
);
