// STYLES
import styles from './timer.module.css';

// COMPONENTS
import ProgressRing from '../ProgressRing';

// HOOKS
import { minToH } from '../../hooks/useTime';

const Timer = ({ time }) => {
  const progress = (100 / 600) * time;
  const hours = minToH(time);

  return (
    <div className={styles.container}>
      <ProgressRing radius={65} stroke={4} progress={progress} label={hours} />
    </div>
  );
};

export default Timer;