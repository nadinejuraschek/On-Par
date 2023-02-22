import * as dayjs from "dayjs";

import { IMonth } from "./types";
import styles from "./datepicker.module.css";

export const Month = ( { currentDate, handleCurrentDate }: IMonth ): JSX.Element => {
  const monthFormat = "MMMM";
  const displayMonth = dayjs( currentDate ).format( monthFormat );

  const prevMonth = (): void => {
    const pastDate = dayjs( currentDate ).subtract( 1, "months" );
    handleCurrentDate( pastDate );
  };

  const nextMonth = (): void => {
    const futureDate = dayjs( currentDate ).add( 1, "months" );
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
