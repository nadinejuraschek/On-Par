import { UserProvider } from "contexts/UserContext";
import { useState } from "react";
// import logo from '../../images/logo.svg';
import styles from "./nav.module.css";
import { NavLink } from "./NavLink";
import notebook from "../../images/book.svg";
import chat from "../../images/chat.svg";
import close from "../../images/close.svg";
import cluster from "../../images/cluster.svg";
import dashboard from "../../images/dashboard.svg";
import hostfamily from "../../images/family.svg";
import menu from "../../images/menu.svg";
import resources from "../../images/mom.svg";

const Navbar = () => {
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
          <p>© { new Date().getFullYear() } Nadine Juraschek</p>
        </div>
      </UserProvider>
    </div>
  );

  return (
    <>
      <nav className={ styles.navMobile }>
        <a className={ styles.logo } href="/home">
          <p>On Par</p>
        </a>
        { openSidenav ? renderMenuButton( "close" ) : renderMenuButton( "menu" ) }
      </nav>
      { openSidenav && mobileNavLinks }

      <nav className={ styles.navDesktop }>
        <a className={ styles.logo } href="/home">
          { /* <div className={styles.navLogo}>
          <img alt='App Logo' src={logo} />
        </div> */ }
          <p>On Par</p>
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

export default Navbar;
