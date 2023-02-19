import styles from "./button.module.css";

export const Button = ({ disabled, link, label, handleClick, variant }) => {
  if (link) {
    <a
      className={ `${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled }` }
      href={ link }
      aria-label={ label }
    >
      { label }
    </a>;
  }

  return (
    <button className={ `${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled }` } onClick={ handleClick }>
      { label }
    </button>
  );
};
