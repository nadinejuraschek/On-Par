import * as dayjs from "dayjs";
import styles from "./datepicker.module.css";

export const Year = ( { handleCurrentDate, currentDate } ) => {
  const yearFormat = "YYYY";
  const displayYear = dayjs( currentDate ).format( yearFormat );

  const prevYear = () => {
    const pastDate = dayjs( currentDate ).subtract( 1, "years" );
    handleCurrentDate( pastDate );
  };

  const nextYear = () => {
    const futureDate = dayjs( currentDate ).add( 1, "years" );
    handleCurrentDate( futureDate );
  };

  return (
    <div className={ styles.year }>
      <button className={ styles.icon } onClick={ prevYear }>
        <i className="chevron left icon"></i>
      </button>
      <div className={ styles.monthName }>
        <span>{ displayYear }</span>
      </div>
      <button className={ styles.icon } onClick={ nextYear }>
        <i className="chevron right icon"></i>
      </button>
    </div>
  );
};
