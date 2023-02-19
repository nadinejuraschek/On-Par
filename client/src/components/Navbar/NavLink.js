import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./nav.module.css";

export const NavLink = ( { label, iconSrc, link } ) => {
  const location = useLocation();
  const paths = location.pathname.split( "/" );

  return (
    <Link
      className={ styles.navLink }
      to={ link }
    >
      <div className={ styles.icon }>
        <img alt={ label } src={ iconSrc } />
      </div>
      <p className={ link === `/${ paths[1] }` ? "" : styles.hide }>{ label }</p>
    </Link>
  );
};
