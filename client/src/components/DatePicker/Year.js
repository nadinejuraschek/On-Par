// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './datepicker.module.css';

const Year = ({ handleCurrentDate, currentDate }) => {
  const yearFormat = 'YYYY';
  const displayYear = moment(currentDate).format(yearFormat);

  // TEST
  // console.log(displayYear);

  const prevYear = () => {
    const pastDate = moment(currentDate).subtract(1, 'years');
    handleCurrentDate(pastDate);
  };

  const nextYear = () => {
    const futureDate = moment(currentDate).add(1, 'years');
    handleCurrentDate(futureDate);
  };

  return (
    <div className={styles.year}>
      <div className={styles.icon} onClick={prevYear}>
        <i class='chevron left icon'></i>
      </div>
      <div className={styles.monthName}>
        <span>{displayYear}</span>
      </div>
      <div className={styles.icon} onClick={nextYear}>
        <i class='chevron right icon'></i>
      </div>
    </div>
  );
};

export default Year;
