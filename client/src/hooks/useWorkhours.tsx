import axios from "axios";
import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useWorkhours() {
  const [loading, setLoading] = useState(false);
  const [workhours, setWorkhours] = useState<TWorkhour[]>([]);
  const [todayWorkhours, setTodayWorkhours] = useState( 0 );
  const [weeklyWorkhours, setWeeklyWorkhours] = useState( 0 );

  useEffect(() => {
    getWorkhours();
    getTodayWorkhours();
  }, []);

  const getWorkhours = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => setWorkhours(res.data))
      .catch( () => toast.error("Could not fetch workhours. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const getTodayWorkhours = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours/today",
      method: "GET",
    } ).then( res => {
      const totalHours = res.data.reduce((acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      setTodayWorkhours(totalHours);
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!")
    }).finally(() => setLoading(false));
  };

  const getWeeklyWorkhours = async (startDate?: string, endDate?: string) => {
    setLoading(true);

    const startOfWeek = startDate || dayjs().startOf("week").format("YYYY-MM-DD");
    const endOfWeek = endDate || dayjs( startOfWeek ).endOf("week").format("YYYY-MM-DD");

    await axios( {
      url: `/api/user/:id/workhours/${startOfWeek}/${endOfWeek}`,
      method: "GET",
    } ).then( res => {
      const totalHours = res.data.reduce( (acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      setWeeklyWorkhours(totalHours);
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!");
    }).finally(() => setLoading(false));
  };

  const createWorkhours = async (newWorkhours: Omit<TWorkhour, "total">, callback?: () => void) => {
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
    getWeeklyWorkhours,
    loading,
    workhours,
    todayWorkhours,
    weeklyWorkhours,
  };
}
