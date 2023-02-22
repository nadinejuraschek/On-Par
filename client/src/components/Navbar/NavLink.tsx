import { NavLink, useLocation } from "react-router-dom";

import { INavLink } from "./types";
import styles from "./nav.module.css";

export const NavLinkComp = ( { iconSrc, label, link }: INavLink ): JSX.Element => {
  const location = useLocation();
  const paths = location.pathname.split( "/" );

  return (
    <NavLink
      className={ styles.navLink }
      to={ link }
    >
      <div className={ styles.icon }>
        {/* @ts-ignore-next-line */}
        <img alt={ label } src={ iconSrc } />
      </div>
      <p className={ link === `/${ paths[1] }` ? "" : styles.hide }>{ label }</p>
    </NavLink>
  );
};
