// import logo from '../../images/logo.svg';
import { Text } from "components";
import { UserProvider } from "contexts/UserContext";
import notebook from "images/book.svg";
import chat from "images/chat.svg";
import close from "images/close.svg";
import cluster from "images/cluster.svg";
import dashboard from "images/dashboard.svg";
import hostfamily from "images/family.svg";
import menu from "images/menu.svg";
import resources from "images/mom.svg";
import { useState } from "react";
import styles from "./nav.module.css";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [openSidenav, setOpenSidenav] = useState( false );

  const toggleSidenav = () => {
    openSidenav ? setOpenSidenav( false ) : setOpenSidenav( true );
  };

  const renderMenuButton = ( icon ) => <button className={ styles.menuIcon } onClick={ toggleSidenav }>
    <img src={ icon === "close" ? close : menu } alt={ icon === "close" ? "Close Menu" : "Open Menu" } />
  </button>;

  const mobileNavLinks = (
    <div className={ styles.sideMobile }>
      <UserProvider>
        <NavLink
          iconSrc={ dashboard }
          label="Dashboard"
          link="/home"
        />

        <NavLink
          iconSrc={ chat }
          label="Messages"
          link="/messages"
        />

        <NavLink
          iconSrc={ notebook }
          label="Notebook"
          link="/notebook"
        />

        <NavLink
          iconSrc={ hostfamily }
          label="Host Family"
          link="/hostfamily"
        />

        <NavLink
          iconSrc={ cluster }
          label="Cluster"
          link="/cluster"
        />

        <NavLink
          iconSrc={ resources }
          label="Resources"
          link="/resources"
        />

        <div className={ styles.footer }>
          <Text as="p" size="xs">© { new Date().getFullYear() } Nadine Pesso</Text>
        </div>
      </UserProvider>
    </div>
  );

  return (
    <>
      <nav className={ styles.navMobile }>
        <a className={ styles.logo } href="/home">
          <Text as="h1" className={ styles.logoText } color="--primary_700" size="xl">On Par</Text>
        </a>
        { openSidenav ? renderMenuButton( "close" ) : renderMenuButton( "menu" ) }
      </nav>
      { openSidenav && mobileNavLinks }

      <nav className={ styles.navDesktop }>
        <a className={ styles.logo } href="/home">
          { /* <div className={styles.navLogo}>
          <img alt='App Logo' src={logo} />
        </div> */ }
          <Text as="h1" className={ styles.logoText } color="--primary_700" size="xl">On Par</Text>
        </a>

        <UserProvider>
          <NavLink
            iconSrc={ dashboard }
            label="Dashboard"
            link="/home"
          />

          <NavLink
            iconSrc={ chat }
            label="Messages"
            link="/messages"
          />

          <NavLink
            iconSrc={ notebook }
            label="Notebook"
            link="/notebook"
          />

          <NavLink
            iconSrc={ hostfamily }
            label="Host Family"
            link="/hostfamily"
          />

          <NavLink
            iconSrc={ cluster }
            label="Cluster"
            link="/cluster"
          />

          <NavLink
            iconSrc={ resources }
            label="Resources"
            link="/resources"
          />

          <div className={ styles.footer }>
            <p>© { new Date().getFullYear() }</p>
          </div>
        </UserProvider>
      </nav>
    </>
  );
};
