// REACT
import React, { useEffect, useState } from 'react';

// STYLES
import styles from './datepicker.module.css';

// COMPONENTS
import Cells from './Cells';
import Month from './Month';
import Year from './Year';

const DatePicker = ({ startDate, setStartDate }) => {
  const [selectedDate, setSelectedDate] = useState(startDate);

  useEffect(() => {
    setStartDate(selectedDate);
  }, [selectedDate, setStartDate]);

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <Year currentDate={startDate} handleCurrentDate={setStartDate} />
        <Month currentDate={startDate} handleCurrentDate={setStartDate} />
        <Cells
          currentDate={startDate}
          selectedDate={selectedDate}
          handleDateClick={setSelectedDate}
        />
      </div>
    </div>
  );
};

export default DatePicker;
