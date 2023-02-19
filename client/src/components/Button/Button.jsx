import styles from "./button.module.css";

export const Button = ({ children, disabled, label, link, handleClick, variant }) => {
  if (link) {
    <a
      className={ `${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled }` }
      href={ link }
      aria-label={ label }
    >
      { children }
    </a>;
  }

  return (
    <button className={ `${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled }` } onClick={ handleClick }>
      { children }
    </button>
  );
};
