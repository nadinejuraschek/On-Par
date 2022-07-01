// REACT
import { useLocation } from 'react-router-dom';

// STYLES
import styles from './nav.module.css';

export const NavLink = ({ label, iconSrc, link } ) => {
  const location = useLocation();
  const paths = location.pathname.split('/');

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
