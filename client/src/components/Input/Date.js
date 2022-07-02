import moment from "moment";
import { useState } from "react";
import styles from "./input.module.css";
import DatePicker from "../DatePicker";

const Date = ( { date, handleChange, icon, label } ) => {
  const [openDatePicker, setOpenDatePicker] = useState( false );

  const toggleDatePicker = event => {
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
          placeholder={ moment().format( "DD/MM/YYYYY" ) }
          onChange={ handleChange }
          value={ moment( date ).format( "DD/MM/YYYY" ) }
        />
        <i className={ `${ icon } icon` }></i>
      </div>
      { openDatePicker ? (
        <DatePicker startDate={ date } setStartDate={ handleChange } />
      ) : null }
    </div>
  );
};

export default Date;
