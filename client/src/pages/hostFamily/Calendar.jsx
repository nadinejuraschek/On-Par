import { useState } from "react";
import Calendar from "react-calendar";

export const CalendarView = () => {
  const [date, setDate] = useState( new Date() );

  const handleChange = date => setDate( date );

  return (
    <main>
      <div>
        <Calendar
          showWeekNumbers
          onChange={ handleChange }
          value={ date }
        />
        { date }
      </div>
    </main>
  );
};
