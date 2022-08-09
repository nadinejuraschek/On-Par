// REACT
import { withRouter } from 'react-router';

// STYLES
import styles from './nav.module.css';

const NavLink = ({ label, iconSrc, link, location } ) => {
  const paths = location.pathname.split('/');
  // TEST
  // console.log(paths[1]);

  return (
    <a
      className={styles.navLink}
      href={link}
    >
      <div className={styles.icon}>
        <img alt={label} src={iconSrc} />
      </div>
      <p className={link === `/${paths[1]}` ? '' : styles.hide}>{label}</p>
    </a>
  );
};

export default withRouter(NavLink);
