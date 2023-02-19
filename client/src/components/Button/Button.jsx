import styles from "./button.module.css";

export const Button = ({ align = "alignCenter", children, disabled, label, link, handleClick, variant = "secondary" }) => {
  if (link) {
    <a
      className={ `${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] }` }
      href={ link }
      aria-label={ label }
    >
      { children }
    </a>;
  }

  return (
    <button
      className={ `${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] }` } onClick={ handleClick }>
      { children }
    </button>
  );
};
