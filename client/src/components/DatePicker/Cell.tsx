import * as dayjs from "dayjs";

import { ICell } from "./types";
import styles from "./datepicker.module.css";

export const Cell = ( {
  day,
  formattedDate,
  handleDateClick,
  monthStart,
  selectedDate,
}: ICell ): JSX.Element => {
  const clickedDate = dayjs( day ).format( "DD/MM/YY" );
  const checkDate = dayjs( selectedDate ).format( "DD/MM/YY" );

  return (
    <button
      className={ `${ styles.column } ${ styles.cell } ${
        !dayjs( day ).isSame( monthStart, "month" )
          ? `${ styles.disabled }`
          : dayjs( day ).isSame( day, "month" )
            ? `${ styles.enabled }`
            : ""
      } ${ clickedDate === checkDate ? `${ styles.selected }` : "" }` }
      /* @ts-ignore-next-line */
      onClick={ () => handleDateClick( day._d ) }
    >
      <span className={ styles.bg }>{ formattedDate }</span>
    </button>
  );
};
