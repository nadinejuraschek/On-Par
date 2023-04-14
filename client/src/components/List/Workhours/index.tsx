import * as dayjs from "dayjs";

import { IWeeklyHours } from "./types";
import { Text } from "components";
import { WeeklyItem } from "./WeeklyItem";
import styles from "./hours.module.css";
import { useState } from "react";

export const WeeklyHours = ( { data }: IWeeklyHours ): JSX.Element => {
  // sort array to display Mon - Sun
  const hours = data.sort( ( a, b ) => a.date - b.date );
  const currentDate = dayjs( new Date() );
  const [startWeek, setStartWeek] = useState( currentDate.startOf( "week" ) );
  const endWeek = dayjs( startWeek ).endOf( "week" );
  let day = startWeek;

  const week = [];

  while ( day <= endWeek ) {
    for ( let i = 0; i < 7; i++ ) {
      week.push(
        <WeeklyItem
          day={ day }
          key={ i }
          hours={ hours }
        />
      );
      day = dayjs( day ).add( 1, "day" );
    }
  }

  const prev = () => {
    const futureDate = dayjs( startWeek ).subtract( 1, "weeks" );
    setStartWeek( futureDate );
  }

  const next = () => {
    const futureDate = dayjs( startWeek ).add( 1, "weeks" );
    setStartWeek( futureDate );
  }

  return (
    <div className={ styles.weeklyGrid }>
      <div className={ styles.chooseDisplay }>
        <button className={ styles.arrow } onClick={ prev }>
          <i className="chevron left icon"></i>
        </button>
        <Text as="h5" size="sm" weight="bold">
          { `${ dayjs( startWeek ).format( "MMM DD" ) } - ${ dayjs( endWeek ).format( "MMM DD" ) }` }
        </Text>
        <button className={ styles.arrow } onClick={ next }>
          <i className="chevron right icon"></i>
        </button>
      </div>
      <ul className={ styles.weeklyList }>
        { week }
      </ul>
    </div>
  );
};
