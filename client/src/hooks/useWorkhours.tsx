import axios from "axios";
import * as dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useWorkhours() {
  const [loading, setLoading] = useState(false);
  const [workhours, setWorkhours] = useState<TWorkhour[]>([]);
  const [todayWorkhourTotal, setTodayWorkhourTotal] = useState( 0 );
  const [weeklyWorkhours, setWeeklyWorkhours] = useState<TWorkhour[]>([]);
  const [weeklyWorkhourTotal, setWeeklyWorkhourTotal] = useState( 0 );

  const getWorkhours = useCallback(async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => setWorkhours(res.data))
      .catch( () => toast.error("Could not fetch workhours. Please try again later!"))
      .finally(() => setLoading(false));
  }, []);

  const getTodayWorkhours = useCallback(async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours/today",
      method: "GET",
    } ).then( res => {
      const totalHours = res.data.reduce((acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      setTodayWorkhourTotal(totalHours);
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!")
    }).finally(() => setLoading(false));
  }, []);

  const getWeeklyWorkhours = useCallback(async (startDate?: string) => {
    setLoading(true);

    const startOfWeek = startDate || dayjs().startOf("week").format("YYYY-MM-DD");
    const endOfWeek = dayjs( startOfWeek ).endOf("week").add(1, "day").format("YYYY-MM-DD");

    await axios( {
      url: `/api/user/:id/workhours/${startOfWeek}/${endOfWeek}`,
      method: "GET",
    } ).then( res => {
      setWeeklyWorkhours(res.data);
      const totalHours = res.data.reduce( (acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      setWeeklyWorkhourTotal(totalHours);
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!");
    }).finally(() => setLoading(false));
  }, []);

  const createWorkhours = useCallback(async (newWorkhours: Omit<TWorkhour, "total">, callback?: () => void) => {
    setLoading(true);
    await axios( {
      url: "/api/workhours",
      method: "POST",
      data: newWorkhours,
    } )
      .then( () => {
        toast.success("Your workhours have been added successfully!");
        getWorkhours();
      } )
      .catch( () => toast.error("The workhours could not be added. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }, [getWorkhours]);

  const deleteWorkhours = useCallback(async (workhoursid: string) => {
    setLoading(true);
    await axios.delete(`/api/workhours/${workhoursid}`).then( () => {
      toast.success("The selected workhours has been deleted successfully!");
      getWorkhours();
    }).catch(() => toast.error("Could not delete the workhours. Please try again later!"))
      .finally(() => setLoading(false));
  }, [getWorkhours]);

  const editWorkhours = useCallback(async (workhoursid: string, updatedWorkhours: TWorkhour, callback?: () => void) => {
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
  }, [getWorkhours]);

  useEffect(() => {
    getWorkhours();
    getTodayWorkhours();
  }, [getTodayWorkhours, getWorkhours]);

  return {
    createWorkhours,
    deleteWorkhours,
    editWorkhours,
    getWeeklyWorkhours,
    loading,
    workhours,
    todayWorkhourTotal,
    weeklyWorkhourTotal,
    weeklyWorkhours,
  };
}
