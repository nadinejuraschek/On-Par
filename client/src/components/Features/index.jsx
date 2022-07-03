import styles from "./features.module.css";

export const FeatureCard = ( { link, icon, title, header } ) => (
  <a className={ styles.container } href={ link }>
    <img src={ icon } className={ styles.icon } alt={ title } />
    <p className={ styles.title }>{ header }</p>
  </a>
);
