import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useFetchWorkhoursToday() {
  const [data, setData] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const getWorkhoursToday = useCallback(async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours/today",
      method: "GET",
    } ).then( res => {
      const totalHours = res.data.reduce((acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      setData(totalHours);
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!")
    }).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getWorkhoursToday();
  }, [getWorkhoursToday]);

  return {
    data,
    loading,
    refetch: getWorkhoursToday,
  };
}
