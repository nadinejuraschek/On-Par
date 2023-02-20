import { Link } from "react-router-dom";
import styles from "./button.module.css";

export const Button = ({ align = "alignCenter", children, className = "", disabled, handleClick, label, link, round = false, variant = "secondary" }) => {
  if (link) {
    return (
      <Link
        aria-label={ label }
        className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] } ${ round && styles.round }` }
        to={ link }
      >
        { children }
      </Link>
    );
  }

  return (
    <button
      className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] } ${ round && styles.round }` } onClick={ handleClick }>
      { children }
    </button>
  );
};
