// REACT
import React, { useEffect, useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './hours.module.css';

// COMPONENTS
import Disabled from '../../Button/Disabled';

// HOOKS
import { minToH } from '../../../hooks/useTime';

const WeeklyItem = ({ day, hours }) => {
  const [ displayHours, setDisplayHours ] = useState(0);

  useEffect(() => {
    hours.forEach(item => {
      if (moment(item.date).format('YY-MM-DD') === moment(day).format('YY-MM-DD')) {
        setDisplayHours(item.total);
      };
    });
  }, [day, hours]);

  return (
    <li className={styles.weeklyItem}>
      <div className={styles.date}>
        <div className={styles.weekday}>{moment(day).format('ddd')}</div>
        <div>{moment(day).format('DD')}</div>
      </div>
      <div className={`${styles.date} ${displayHours > 600 ? styles.red : styles.green}`}>
        {
          displayHours === 0
          ?
          null
          :
          minToH(displayHours)
        }
      </div>
      {moment(day).format('YY-MM-DD') ===
      moment(new Date()).format('YY-MM-DD') ? (
        <Disabled label='Start' width="5rem" />
      ) : null}
    </li>
  );
};

export default WeeklyItem;
