import moment from "moment";
import { useState } from "react";
import styles from "./hours.module.css";
import { WeeklyItem } from "./WeeklyItem";

export const WeeklyHours = ( { data } ) => {
  // sort array to display Mon - Sun
  const hours = data.sort( ( a,b )=>a.date-b.date );
  const currentDate = moment( new Date() );
  const [startWeek, setStartWeek] = useState( moment( currentDate ).startOf( "week" ) );
  const endWeek = moment( startWeek ).endOf( "week" );
  let day = startWeek;

  const week = [];

  while ( day <= endWeek ) {
    for ( let i = 0; i < 7; i++ ) {
      week.push(
        <WeeklyItem
          day={ day }
          key={ day }
          hours={ hours }
        />
      );
      day = moment( day ).add( 1, "day" );
    }
  }

  const prev = () => {
    const futureDate = moment( startWeek ).subtract( 1, "weeks" );
    setStartWeek( futureDate );
  }

  const next = () => {
    const futureDate = moment( startWeek ).add( 1, "weeks" );
    setStartWeek( futureDate );
  }

  return (
    <div className={ styles.weeklyGrid }>
      <div className={ styles.chooseDisplay }>
        <button className={ styles.arrow } onClick={ prev }>
          <i className="chevron left icon"></i>
        </button>
        <h5>{ `${ moment( startWeek ).format( "MMM DD" ) } - ${ moment( endWeek ).format( "MMM DD" ) }` }</h5>
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
