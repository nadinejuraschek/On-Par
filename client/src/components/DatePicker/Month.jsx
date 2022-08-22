import moment from "moment";
import styles from "./datepicker.module.css";

export const Month = ( { handleCurrentDate, currentDate } ) => {
  const monthFormat = "MMMM";
  const displayMonth = moment( currentDate ).format( monthFormat );

  const prevMonth = () => {
    const pastDate = moment( currentDate ).subtract( 1, "months" );
    handleCurrentDate( pastDate );
  };

  const nextMonth = () => {
    const futureDate = moment( currentDate ).add( 1, "months" );
    handleCurrentDate( futureDate );
  };

  return (
    <div className={ styles.month }>
      <button className={ styles.icon } onClick={ prevMonth }>
        <i className="chevron left icon"></i>
      </button>
      <div className={ styles.monthName }>
        <span>{ displayMonth }</span>
      </div>
      <button className={ styles.icon } onClick={ nextMonth }>
        <i className="chevron right icon"></i>
      </button>
    </div>
  );
};
