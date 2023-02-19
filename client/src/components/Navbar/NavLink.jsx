import { NavLink, useLocation } from "react-router-dom";

import styles from "./nav.module.css";

export const NavLinkComp = ( { label, iconSrc, link } ) => {
  const location = useLocation();
  const paths = location.pathname.split( "/" );

  return (
    <NavLink
      className={ styles.navLink }
      to={ link }
    >
      <div className={ styles.icon }>
        <img alt={ label } src={ iconSrc } />
      </div>
      <p className={ link === `/${ paths[1] }` ? "" : styles.hide }>{ label }</p>
    </NavLink>
  );
};
