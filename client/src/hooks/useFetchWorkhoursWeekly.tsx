import axios from "axios";
import * as dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

interface IUseFetchWorkhoursWeekly {
  startDate?: string | dayjs.Dayjs;
}

export function useFetchWorkhoursWeekly({ startDate }: IUseFetchWorkhoursWeekly) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["workhoursWeekly", startDate],
    queryFn: async () => {
      const startOfWeek = startDate || dayjs().startOf("week").format("YYYY-MM-DD");
      const endOfWeek = dayjs(startOfWeek).endOf("week").add(1, "day").format("YYYY-MM-DD");

      const response = await axios({
        url: `/api/user/:id/workhours/${startOfWeek}/${endOfWeek}`,
        method: "GET",
      });

      const totalHours = response.data.reduce((acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);

      return { hours: response.data, total: totalHours };
    },
  });

  if (isError) {
    toast.error("Could not fetch workhours. Please try again later!");
  }

  return {
    data: data ?? { hours: [], total: 0 },
    loading: isLoading,
    isError,
    refetch,
  };
}
