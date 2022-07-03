import styles from "./button.module.css";

export const Secondary = ( { link, label, handleClick } ) => {
  if ( link ) {
    return ( <a className={ styles.secondary } href={ link } aria-label={ label }>
      { label }
    </a> );
  }

  return (
    <button className={ styles.secondary } onClick={ handleClick }>
      { label }
    </button>
  );
};
