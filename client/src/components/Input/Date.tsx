import * as dayjs from "dayjs";

import { MouseEvent, useState } from "react";

import { DatePicker } from "../DatePicker";
import { IDateInput } from "./types";
import styles from "./input.module.css";

export const Date = ( { date, handleChange, icon, label }: IDateInput ): JSX.Element => {
  const [openDatePicker, setOpenDatePicker] = useState( false );

  const toggleDatePicker = (event: MouseEvent): void => {
    event.preventDefault();
    openDatePicker ? setOpenDatePicker( false ) : setOpenDatePicker( true );
  };

  return (
    <div className={ `field ${ styles.stacked }` }>
      <label className={ styles.label }>{ label }</label>
      <div className={ styles.dateInput } onClick={ toggleDatePicker } role="presentation">
        <input
          type="text"
          name="date"
          placeholder={ dayjs().format( "DD/MM/YYYYY" ) }
          onChange={ handleChange }
          value={ dayjs( date ).format( "DD/MM/YYYY" ) }
        />
        <i className={ `${ icon } icon` }></i>
      </div>
      { openDatePicker ? (
        <DatePicker startDate={ date } setStartDate={ handleChange } />
      ) : null }
    </div>
  );
};
