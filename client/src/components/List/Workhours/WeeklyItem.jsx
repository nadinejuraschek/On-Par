import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { TimeUtils } from "utils";
import styles from "./hours.module.css";
import { Disabled } from "../../Button";

export const WeeklyItem = ( { day, hours } ) => {
  const [ displayHours, setDisplayHours ] = useState( 0 );

  const startTrackerBtn = dayjs( day ).format( "YY-MM-DD" ) ===
      dayjs( new Date() ).format( "YY-MM-DD" ) && ( <Disabled label="Start" width="5rem" /> );

  useEffect( () => {
    hours.forEach( item => {
      if ( dayjs( item.date ).format( "YY-MM-DD" ) === dayjs( day ).format( "YY-MM-DD" ) ) {
        setDisplayHours( item.total );
      }
    } );
  }, [day, hours] );

  return (
    <li className={ styles.weeklyItem }>
      <div className={ styles.date }>
        <div className={ styles.weekday }>{ dayjs( day ).format( "ddd" ) }</div>
        <div>{ dayjs( day ).format( "DD" ) }</div>
      </div>
      <div className={ `${ styles.date } ${ displayHours > 600 ? styles.red : styles.green }` }>
        {
          displayHours === 0
            ?
            null
            :
            TimeUtils.minToH( displayHours )
        }
      </div>
      { startTrackerBtn }
    </li>
  );
};
