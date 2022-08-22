import styles from "./button.module.css";

export const Disabled = ( { label, width } ) => (
  <button className={ styles.disabled } style={ { width: width } }>
    { label }
  </button>
);
