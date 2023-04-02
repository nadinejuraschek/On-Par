import { NavLink, useLocation } from "react-router-dom";

import { INavLink } from "./types";
import styles from "./nav.module.css";

export const NavLinkComp = ( {
  iconSrc,
  label,
  link,
  toggleSidenav = () => {},
}: INavLink ): JSX.Element => {
  const location = useLocation();
  const paths = location.pathname.split( "/" );

  const isActive = link === `/${ paths[1] }`;

  return (
    <NavLink
      className={ styles.navLink }
      onClick={toggleSidenav}
      to={ link }
    >
      <div className={ styles.icon }>
        {/* @ts-ignore-next-line */}
        <img alt={ label } src={ iconSrc } />
      </div>
      <div className={ styles.label }>
        <p className={ isActive ? "" : styles.hide }>{ label }</p>
      </div>
    </NavLink>
  );
};
