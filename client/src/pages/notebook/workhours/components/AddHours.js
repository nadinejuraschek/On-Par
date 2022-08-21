import axios from "axios";
import Add from "components/Button/Add";
import Date from "components/Input/Date";
import Time from "components/Input/Time";
import moment from "moment";
import { useState } from "react";
import styles from "../workhours.module.css";

const AddHours = ( { updateWorkhours } ) => {
  const today = moment();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [date, setDate] = useState( today );

  const handleSubmit = event => {
    event.preventDefault();

    const setTime = ( time ) => {
      const hours = time.split( ":" )[0];
      const minutes = time.split( ":" )[1];
      const newTime = moment( date ).set( "hour", hours ).set( "minute", minutes );
      return newTime;
    };

    const startTime = setTime( start );
    const endTime = setTime( end );
    const duration = moment( endTime ).diff( startTime, "minutes" );

    const newHours = {
      date: date,
      hours: [{
        start: startTime,
        end: endTime,
        duration: duration,
      }],
    };

    axios.post( "/api/workhours", newHours ).then( workhours => {
      // console.log("Hours have been added successfully!", workhours);
      updateWorkhours();
    } ).catch( err => {
      console.log( "Error: ", err );
    } );
  };

  return (
    <>
      <h3>Add Hours</h3>
      <div className={ styles.addForm }>
        <Date
          date={ date }
          name="date"
          label="Date"
          value={ date }
          icon="calendar alternate outline"
          handleChange={ setDate }
        />
        <Time
          start={ start }
          handleStart={ setStart }
          end={ end }
          handleEnd={ setEnd }
        />
      </div>
      <div className={ styles.btnWrapper }>
        <Add handleClick={ handleSubmit } />
      </div>
    </>
  );
};

export default AddHours;
