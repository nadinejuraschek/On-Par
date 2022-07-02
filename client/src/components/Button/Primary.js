import styles from "./button.module.css";

const Primary = ( { link, label, handleClick } ) => {
  return (
    <>
      { link ? (
        <a className={ styles.primary } href={ link } aria-label={ label }>
          { label }
        </a>
      ) : (
        <button className={ styles.primary } onClick={ handleClick }>
          { label }
        </button>
      ) }
    </>
  );
};

export default Primary;
