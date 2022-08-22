import * as dayjs from "dayjs";
import styles from "./datepicker.module.css";

export const Cell = ( {
  day,
  selectedDate,
  formattedDate,
  monthStart,
  handleDateClick,
} ) => {
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
      onClick={ () => handleDateClick( day._d ) }
    >
      <span className={ styles.bg }>{ formattedDate }</span>
    </button>
  );
};
