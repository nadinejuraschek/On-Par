// STYLES
import styles from './today.module.css';

// ICONS
import comingsoon from 'images/comingsoon.svg';

const TodayView = () => (
    <div className={styles.container}>
      <h3>Today's Plan</h3>
      <div className={styles.soon}>
        <div className={styles.clock}>
          <img src={comingsoon} alt="Coming Soon" />
        </div>
      </div>
    </div>
  );

export default TodayView;
