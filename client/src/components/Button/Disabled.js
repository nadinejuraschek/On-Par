// STYLES
import styles from './button.module.css';

const Disabled = ({ label, width }) => {
  return (
    <button className={styles.disabled} style={{width: width}}>
      {label}
    </button>
  );
};

export default Disabled;