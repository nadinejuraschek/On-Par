import { useEffect, useState } from "react";
import { Cells } from "./Cells";
import styles from "./datepicker.module.css";
import { Month } from "./Month";
import { Year } from "./Year";

export const DatePicker = ( { setStartDate, startDate } ) => {
  const [selectedDate, setSelectedDate] = useState( startDate );

  useEffect( () => {
    setStartDate( selectedDate );
  }, [selectedDate, setStartDate] );

  return (
    <div className={ styles.container }>
      <div className={ styles.calendar }>
        <Year currentDate={ startDate } handleCurrentDate={ setStartDate } />
        <Month currentDate={ startDate } handleCurrentDate={ setStartDate } />
        <Cells
          currentDate={ startDate }
          selectedDate={ selectedDate }
          handleDateClick={ setSelectedDate }
        />
      </div>
    </div>
  );
};
