import * as dayjs from "dayjs";

import { Button, DatePicker, Text } from "components";
import { FormEvent, useCallback } from 'react';

import axios from "axios";
import styles from "../workhours.module.css";
import { useState } from "react";

export const AddHours = ( { updateWorkhours } ): JSX.Element => {
  const today = new Date();
  const [date, setDate] = useState<Date>( today );
  const [start, setStart] = useState<Date | undefined>( undefined );
  const [end, setEnd] = useState<Date | undefined>( undefined );

  const handleSubmit = useCallback((event: FormEvent): void => {
    event.preventDefault();

    const duration = dayjs( end ).diff( start, "minutes" );

    const newHours = {
      date: date,
      hours: [{
        start: start,
        end: end,
        duration: duration,
      }],
    };

    axios.post( "/api/workhours", newHours ).then( workhours => {
      // console.log("Hours have been added successfully!", workhours);
      updateWorkhours();
    } ).catch( err => {
      console.log( "Error: ", err );
    } );
  }, [date, end, start, updateWorkhours]);

  return (
    <>
      <Text as="h3" size="lg" weight="bold">Add Hours</Text>
      <div className={ styles.addForm }>
        <DatePicker
          format="MM/dd/yyyy"
          fullWidth
          handleChange={(selected: Date) => setDate(selected)}
          icon="calendar alternate outline"
          label="Date"
          name="date"
          value={date}
        />
        <DatePicker
          format="hh:mma"
          fullWidth
          handleChange={(selected: Date) => {
            const newDate = date.setHours(selected.getHours(), selected.getMinutes());
            setStart(new Date(newDate));
          }}
          icon="clock outline"
          label="Start Time"
          name="start"
          value={start}
        />
        <DatePicker
          format="hh:mma"
          fullWidth
          handleChange={(selected: Date) => {
            const newDate = date.setHours(selected.getHours(), selected.getMinutes());
            setEnd(new Date(newDate));
          }}
          icon="clock outline"
          label="End Time"
          name="end"
          value={end}
        />
      </div>
      <Button fullWidth handleClick={ handleSubmit } variant="primary">
        Add Hours
      </Button>
    </>
  );
};
