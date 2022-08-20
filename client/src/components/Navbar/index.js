// REACT
import { useState } from 'react';

// ICONS
// import logo from '../../images/logo.svg';
import chat from '../../images/chat.svg';
import notebook from '../../images/book.svg';
import hostfamily from '../../images/family.svg';
import cluster from '../../images/cluster.svg';
import resources from '../../images/mom.svg';
import dashboard from '../../images/dashboard.svg';
import menu from '../../images/menu.svg';
import close from '../../images/close.svg';

// COMPONENTS
import {NavLink} from './NavLink';

// CONTEXTS
import { UserProvider } from 'contexts/UserContext';

// STYLES
import styles from './nav.module.css';

const Navbar = () => {
  const [openSidenav, setOpenSidenav] = useState(false);

  const toggleSidenav = () => {
    openSidenav ? setOpenSidenav(false) : setOpenSidenav(true);
  }

  return (
    <>
    <nav className={styles.navMobile}>
      <a className={styles.logo} href='/home'>
        <p>On Par</p>
      </a>
      {
        openSidenav
        ?
        <div className={styles.menuIcon} onClick={toggleSidenav}>
          <img src={close} alt="Close Menu" />
        </div>
        :
        <div className={styles.menuIcon} onClick={toggleSidenav}>
          <img src={menu} alt="Open Menu" />
        </div>
      }
    </nav>
    {
      openSidenav
      ?
      <div className={styles.sideMobile}>
        <UserProvider>
            <NavLink
              iconSrc={dashboard}
              label='Dashboard'
              link='/home'
            />

            <NavLink
              iconSrc={chat}
              label='Messages'
              link='/messages'
            />

            <NavLink
              iconSrc={notebook}
              label='Notebook'
              link='/notebook'
            />

            <NavLink
              iconSrc={hostfamily}
              label='Host Family'
              link='/hostfamily'
            />

            <NavLink
              iconSrc={cluster}
              label='Cluster'
              link='/cluster'
            />

            <NavLink
              iconSrc={resources}
              label='Resources'
              link='/resources'
            />

            <div className={styles.footer}>
              <p>© {new Date().getFullYear()} Nadine Juraschek</p>
            </div>
          </UserProvider>
      </div>
      :
      null
    }

    <nav className={styles.navDesktop}>
      <a className={styles.logo} href='/home'>
        {/* <div className={styles.navLogo}>
          <img alt='App Logo' src={logo} />
        </div> */}
        <p>On Par</p>
      </a>

      <UserProvider>
        <NavLink
          iconSrc={dashboard}
          label='Dashboard'
          link='/home'
        />

        <NavLink
          iconSrc={chat}
          label='Messages'
          link='/messages'
        />

        <NavLink
          iconSrc={notebook}
          label='Notebook'
          link='/notebook'
        />

        <NavLink
          iconSrc={hostfamily}
          label='Host Family'
          link='/hostfamily'
        />

        <NavLink
          iconSrc={cluster}
          label='Cluster'
          link='/cluster'
        />

        <NavLink
          iconSrc={resources}
          label='Resources'
          link='/resources'
        />

        <div className={styles.footer}>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </UserProvider>
    </nav>
    </>
  );
};

export default Navbar;
