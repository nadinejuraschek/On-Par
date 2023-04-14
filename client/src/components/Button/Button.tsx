import { IButton } from "./types";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

export const Button = ({
  align = "alignCenter",
  autoFocus = false,
  children,
  className = "",
  disabled = false,
  fullWidth = false,
  handleClick,
  label = "",
  link,
  round = false,
  type = 'button',
  variant = "secondary",
}: IButton): JSX.Element => {
  if (link) {
    return (
      <Link
        aria-label={ label }
        autoFocus={autoFocus}
        className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] } ${ round && styles.round } ${ fullWidth && styles.fullWidth }` }
        to={ link }
      >
        { children }
      </Link>
    );
  }

  return (
    <button
      autoFocus={autoFocus}
      className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled && styles.disabled } ${ align && styles[align] } ${ round && styles.round } ${ fullWidth && styles.fullWidth }` }
      onClick={ handleClick }
      type={ type }
    >
      { children }
    </button>
  );
};
