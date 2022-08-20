// STYLES
import styles from './ring.module.css';

const ProgressRing = ({ radius, stroke, progress, label }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const labelSize = radius * 2;

  return (
    <div className={styles.container}>
    <svg height={radius * 2} width={radius * 2} className={styles.ring}>
      <circle
        className={styles.ring}
        stroke='#f1f1f1'
        fill='transparent'
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className={styles.progress}
        stroke='#86abfa'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
    <div className={styles.label} style={{height: labelSize, width: labelSize}}>
        {label}
    </div>
    </div>
  );
};

export default ProgressRing;
