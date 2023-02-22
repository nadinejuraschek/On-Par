import Calendar from "react-calendar";
import { useState } from "react";

export const CalendarView = (): JSX.Element => {
  const [date, setDate] = useState( new Date() );

  const handleChange = (date: Date): void => setDate( date );

  return (
    <main>
      {/* @ts-ignore-next-line */}
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
