import { IButton } from "./types";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

export const Button = ({
  align = "alignCenter",
  children,
  className = "",
  disabled = false,
  fullWidth = false,
  handleClick,
  label = "",
  link,
  round = false,
  square = false,
  type = 'button',
  variant = "secondary",
}: IButton): JSX.Element => {
  if (link) {
    return (
      <Link
        aria-label={ label }
        className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled ? styles.disabled : '' } ${ align ? styles[align] : '' } ${ round ? styles.round : '' } ${ fullWidth ? styles.fullWidth : '' } ${ square ? styles.square : '' }` }
        to={ link }
      >
        { children }
      </Link>
    );
  }

  return (
    <button
      className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled ? styles.disabled : '' } ${ align ? styles[align] : '' } ${ round ? styles.round : '' } ${ fullWidth ? styles.fullWidth : '' } ${ square ? styles.square : '' }` }
      onClick={ handleClick }
      type={ type }
    >
      { children }
    </button>
  );
};
