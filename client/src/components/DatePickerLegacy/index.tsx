import { useEffect, useState } from "react";

import { Cells } from "./Cells";
import { IDatePicker } from "./types";
import { Month } from "./Month";
import { Year } from "./Year";
import styles from "./datepicker.module.css";

export const DatePicker = ( { setStartDate, startDate }: IDatePicker ): JSX.Element => {
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
