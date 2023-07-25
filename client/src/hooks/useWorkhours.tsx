import axios from "axios";
import * as dayjs from "dayjs";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useWorkhours() {
  const [loading, setLoading] = useState(false);
  const [workhours, setWorkhours] = useState<TWorkhour[]>([]);
  const [todayWorkhours, setTodayWorkhours] = useState( 0 );

  useEffect(() => {
    getWorkhours();
    getTodayWorkhours();
  }, []);

  const getWorkhours = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => setWorkhours(res.data.workhours))
      .catch( () => toast.error("Could not fetch workhours. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const getTodayWorkhours = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => {
      const hours = res.data.workhours;
      hours.forEach( (hour: TWorkhour) => {
        if ( hour.dateFormat === dayjs( new Date() ).format( "YY-MM-DD" ) ) {
          setTodayWorkhours( hour.total );
        }
        return;
      } );
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!")
    }).finally(() => setLoading(false));
  };

  const createWorkhours = async (newWorkhours: Omit<TWorkhour, "dateFormat" | "total">, callback?: () => void) => {
    setLoading(true);
    await axios( {
      url: "/api/workhours",
      method: "POST",
      data: newWorkhours,
    } )
      .then( () => {
        toast.success("Your workhours has been added successfully!");
        getWorkhours();
      } )
      .catch( () => toast.error("The workhours could not be added. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  };

  const deleteWorkhours = async (workhoursid: string) => {
    setLoading(true);
    await axios.delete(`/api/workhours/${workhoursid}`).then( () => {
      toast.success("The selected workhours has been deleted successfully!");
      getWorkhours();
    }).catch(() => toast.error("Could not delete the workhours. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const editWorkhours = async (workhoursid: string, updatedWorkhours: TWorkhour, callback?: () => void) => {
    setLoading(true);
    await axios
      .put(`/api/workhours/${workhoursid}`, updatedWorkhours)
      .then(() => {
        toast.success("The workhours has been updated successfully!");
        getWorkhours();
      })
      .catch(() => toast.error("Could not update the workhours. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }

  return {
    createWorkhours,
    deleteWorkhours,
    editWorkhours,
    loading,
    workhours,
    todayWorkhours,
  };
}
