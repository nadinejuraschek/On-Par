import * as dayjs from "dayjs";
import { Cell } from "./Cell";
import styles from "./datepicker.module.css";

export const Cells = ( { currentDate, handleDateClick, selectedDate } ) => {
  const dateFormat = "D";

  const monthStart = dayjs( currentDate ).startOf( "month" );
  const monthEnd = dayjs( currentDate ).endOf( "month" );

  const startDate = dayjs( monthStart ).startOf( "week" );
  const endDate = dayjs( monthEnd ).endOf( "week" );

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while ( day <= endDate ) {
    for ( let i = 0; i < 7; i++ ) {
      formattedDate = dayjs( day ).format( dateFormat );
      days.push(
        <Cell
          day={ day }
          formattedDate={ formattedDate }
          monthStart={ monthStart }
          selectedDate={ selectedDate }
          key={ day }
          handleDateClick={ handleDateClick }
        />
      );
      day = dayjs( day ).add( 1, "day" );
    }
    rows.push(
      <div className={ styles.row } key={ day }>
        { " " }
        { days }{ " " }
      </div>
    );
    days = [];
  }

  return <div className={ styles.body }>{ rows }</div>;
};
