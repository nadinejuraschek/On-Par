import * as dayjs from "dayjs";

import { AddButton, Text } from "components";
import { Date, Time } from "components/Input";

import { FormEvent } from 'react';
import axios from "axios";
import styles from "../workhours.module.css";
import { useState } from "react";

export const AddHours = ( { updateWorkhours } ): JSX.Element => {
  const today = dayjs();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [date, setDate] = useState( today );

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const setTime = ( time: string ): dayjs.Dayjs => {
      const hours = Number(time.split( ":" )[0]);
      const minutes = Number(time.split( ":" )[1]);
      const newTime = dayjs( date ).set( "hour", hours ).set( "minute", minutes );
      return newTime;
    };

    const startTime = setTime( start );
    const endTime = setTime( end );
    const duration = dayjs( endTime ).diff( startTime, "minutes" );

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
      <Text as="h3" size="lg" weight="bold">Add Hours</Text>
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
        <AddButton handleClick={ handleSubmit } />
      </div>
    </>
  );
};
