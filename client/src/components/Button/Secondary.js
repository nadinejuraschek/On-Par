import styles from "./button.module.css";

const Secondary = ( { link, label, handleClick } ) => {
  return (
    <>
      { link ? (
        <a className={ styles.secondary } href={ link } aria-label={ label }>
          { label }
        </a>
      ) : (
        <button className={ styles.secondary } onClick={ handleClick }>
          { label }
        </button>
      ) }
    </>
  );
};

export default Secondary;