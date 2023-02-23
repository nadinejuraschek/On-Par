// import logo from '../../images/logo.svg';

import { useMemo, useState } from "react";

import { NavLinkComp as NavLink } from "./NavLink";
import { Sidenav } from "./Sidenav";
import { Text } from "components";
import { UserProvider } from "contexts/UserContext";
import close from "images/close.svg";
import menu from "images/menu.svg";
import { navLinks } from "data";
import styles from "./nav.module.css";

export const Navbar = (): JSX.Element => {
  const [openSidenav, setOpenSidenav] = useState( false );

  const toggleSidenav = () => {
    openSidenav ? setOpenSidenav( false ) : setOpenSidenav( true );
  };

  const renderMenuButton = ( icon ) => (
    <button className={ styles.menuIcon } onClick={ toggleSidenav }>
      {/* @ts-ignore-next-line */}
      <img src={ icon === "close" ? close : menu } alt={ icon === "close" ? "Close Menu" : "Open Menu" } />
    </button>
  );

  const renderLinks = useMemo(() => {
    return navLinks.map(link => {
      const { iconSrc, label, link: href } = link;
      return (<NavLink iconSrc={ iconSrc } key={ `navLink_${ label }` } label={ label } link={ href } />);
    });
  }, []);

  return (
    <>
      <nav className={ styles.navMobile }>
        <a className={ styles.logo } href="/home">
          <Text as="h1" className={ styles.logoText } color="--primary_700" size="xl">On Par</Text>
        </a>
        { openSidenav ? renderMenuButton( "close" ) : renderMenuButton( "menu" ) }
      </nav>
      { openSidenav && <Sidenav /> }

      <nav className={ styles.navDesktop }>
        <a className={ styles.logo } href="/home">
          { /* <div className={styles.navLogo}>
          <img alt='App Logo' src={logo} />
        </div> */ }
          <Text as="h1" className={ styles.logoText } color="--primary_700" size="xl">On Par</Text>
        </a>

        <UserProvider>
          { renderLinks }
          <div className={ styles.footer }>
            <p>© { new Date().getFullYear() }</p>
          </div>
        </UserProvider>
      </nav>
    </>
  );
};
