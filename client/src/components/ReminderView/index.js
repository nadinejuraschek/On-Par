// STYLES
import styles from './reminder.module.css';

// ICONS
import comingsoon from 'images/comingsoon.svg';

const ReminderView = () => (
    <div className={styles.container}>
      <h3>Reminders</h3>
      <div className={styles.soon}>
        <div className={styles.clock}>
          <img src={comingsoon} alt="Coming Soon" />
        </div>
      </div>
    </div>
  );

export default ReminderView;