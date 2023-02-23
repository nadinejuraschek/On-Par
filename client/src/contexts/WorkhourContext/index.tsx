import * as dayjs from "dayjs";

import { IWorkhourContext, IWorkhourProvider, THour } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const WorkhourContext = createContext<IWorkhourContext>({});

export const WorkhourProvider = ( { children }: IWorkhourProvider ): JSX.Element => {
  const [workhours, setWorkhours] = useState( [] );
  const [todayHours, setTodayHours] = useState( 0 );

  useEffect( () => {
    getWorkhours();
    getTodayHours();
  }, [] );

  const getWorkhours = (): void => {
    axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => {
      setWorkhours( res.data.workhours );
    } ).catch( error => console.log( "Error: ", error ) );
  };

  const currentDate = dayjs( new Date() );
  const getTodayHours = (): void => {
    axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => {
      const hours = res.data.workhours;
      hours.forEach( (hour: THour): void => {
        if ( hour.dateFormat === currentDate.format( "YY-MM-DD" ) ) {
          setTodayHours( hour.total );
        }
        return;
      } );
    } );
  };

  const deleteWorkhours = (workhourid: string) => {
    axios.delete( "/api/workhours/" + workhourid ).then( res => {
      getWorkhours();
    } );
  };

  return (
    <WorkhourContext.Provider
      value={ { workhours, getWorkhours, todayHours, deleteWorkhours } }
    >
      { children }
    </WorkhourContext.Provider>
  );
};
