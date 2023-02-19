import styles from "./button.module.css";

export const Button = ({ align = "alignCenter", children, className = "", disabled, label, link, handleClick, round = false, variant = "secondary" }) => {
  if (link) {
    <a
      className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] } ${ round && styles.round }` }
      href={ link }
      aria-label={ label }
    >
      { children }
    </a>;
  }

  return (
    <button
      className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] } ${ round && styles.round }` } onClick={ handleClick }>
      { children }
    </button>
  );
};
