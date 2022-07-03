import styles from "./resources.module.css";

export const ResourceItem = ( { active, icon, label, link } ) => (
  <a className={ `${ styles.item } ${ active ? "" : styles.inactive }` } href={ link }>
    <div className={ styles.icon }>
      <img src={ icon } alt={ label } />
    </div>
    <p className={ styles.label }>{ label }</p>
  </a>
);
