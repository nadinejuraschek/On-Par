import axios from "axios";
import * as dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

interface IUseFetchWorkhoursWeekly {
  startDate?: string | dayjs.Dayjs;
}

export function useFetchWorkhoursWeekly({ startDate }: IUseFetchWorkhoursWeekly) {
  const [data, setData] = useState<{ hours: TWorkhour[], total: number }>({ hours: undefined, total: 0 });
  const [loading, setLoading] = useState(false);

  const getWorkhours = useCallback(async () => {
    setLoading(true);

    const startOfWeek = startDate || dayjs().startOf("week").format("YYYY-MM-DD");
    const endOfWeek = dayjs( startOfWeek ).endOf("week").add(1, "day").format("YYYY-MM-DD");

    await axios( {
      url: `/api/user/:id/workhours/${startOfWeek}/${endOfWeek}`,
      method: "GET",
    } ).then( res => {
      const totalHours = res.data.reduce( (acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      setData({ hours: res.data, total: totalHours });
    } ).catch(() => {
      toast.error("Could not fetch workhours. Please try again later!");
    }).finally(() => setLoading(false));
  }, [startDate]);

  useEffect(() => {
    getWorkhours();
  }, [getWorkhours]);

  return {
    data,
    loading,
    refetch: getWorkhours,
  };
}
