import * as dayjs from "dayjs";

import { IWorkhourContext, IWorkhourProvider, THour } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

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
    } ).catch( () => {
      toast.error("Could not fetch workhours. Please try again later!");
      // console.debug( "Error when fetching workhours: ", error );
    });
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
    axios.delete( "/api/workhours/" + workhourid ).then( () => {
      toast.success("The selected workhours have been deleted successfully!");
      getWorkhours();
    } ).catch(() => {
      toast.error("Could not delete the workhours. Please try again later!");
      // console.debug('Error when deleting workhours: ', error);
    });
  };

  return (
    <WorkhourContext.Provider
      value={ { workhours, getWorkhours, todayHours, deleteWorkhours } }
    >
      { children }
    </WorkhourContext.Provider>
  );
};
