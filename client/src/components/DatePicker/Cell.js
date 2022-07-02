import moment from "moment";
import styles from "./datepicker.module.css";

const Cell = ( {
  day,
  selectedDate,
  formattedDate,
  monthStart,
  handleDateClick,
} ) => {
  const clickedDate = moment( day ).format( "DD/MM/YY" );
  const checkDate = moment( selectedDate ).format( "DD/MM/YY" );

  return (
    <button
      className={ `${ styles.column } ${ styles.cell } ${
        !moment( day ).isSame( monthStart, "month" )
          ? `${ styles.disabled }`
          : moment( day ).isSame( day, "month" )
            ? `${ styles.enabled }`
            : ""
      } ${ clickedDate === checkDate ? `${ styles.selected }` : "" }` }
      onClick={ () => handleDateClick( day._d ) }
    >
      <span className={ styles.bg }>{ formattedDate }</span>
    </button>
  );
};

export default Cell;
