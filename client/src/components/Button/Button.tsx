import { IButton } from "./types";
import { Link } from "react-router-dom";
import styles from "./button.module.css";
import { useMemo } from 'react';

export const Button = ({
  align = "alignCenter",
  children,
  className = "",
  disabled = false,
  fullWidth = false,
  handleClick,
  label = "",
  link,
  loading = false,
  round = false,
  square = false,
  type = 'button',
  variant = "secondary",
}: IButton): JSX.Element => {
  const renderLabel = useMemo(() => {
    if (loading) {
      return <div className={styles.loader} />;
    }

    return children;
  }, [children, loading]);

  if (link) {
    return (
      <Link
        aria-label={ label }
        className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled ? styles.disabled : '' } ${ align ? styles[align] : '' } ${ round ? styles.round : '' } ${ fullWidth ? styles.fullWidth : '' } ${ square ? styles.square : '' }` }
        to={ link }
      >
        { renderLabel }
      </Link>
    );
  }

  return (
    <button
      className={ `${ className } ${ styles.btn } ${ styles[variant] } ${ disabled ? styles.disabled : '' } ${ align ? styles[align] : '' } ${ round ? styles.round : '' } ${ fullWidth ? styles.fullWidth : '' } ${ square ? styles.square : '' }` }
      onClick={ handleClick }
      type={ type }
    >
      { renderLabel }
    </button>
  );
};
