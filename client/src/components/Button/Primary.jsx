import styles from "./button.module.css";

export const Primary = ( { link, label, handleClick } ) => {
  if ( link ) {
    <a className={ styles.primary } href={ link } aria-label={ label }>
      { label }
    </a>
  }

  return (
    <button className={ styles.primary } onClick={ handleClick }>
      { label }
    </button>
  );
};
