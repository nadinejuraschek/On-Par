import axios from "axios";
import * as dayjs from "dayjs";
import { useState, useEffect, createContext } from "react";
export const WorkhourContext = createContext();

export const WorkhourProvider = ( { children } ) => {
  const [workhours, setWorkhours] = useState( [] );
  const [todayHours, setTodayHours] = useState( 0 );

  useEffect( () => {
    getWorkhours();
    getTodayHours();
  }, [] );

  const getWorkhours = () => {
    axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => {
      setWorkhours( res.data.workhours );
    } ).catch( error => console.log( "Error: ", error ) );
  };

  const currentDate = dayjs( new Date() );
  const getTodayHours = () => {
    axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => {
      const hours = res.data.workhours;
      hours.forEach( hour => {
        if ( hour.dateFormat === currentDate.format( "YY-MM-DD" ) ) {
          setTodayHours( hour.total );
        }
      } );
    } );
  };

  const deleteWorkhours = workhourid => {
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
