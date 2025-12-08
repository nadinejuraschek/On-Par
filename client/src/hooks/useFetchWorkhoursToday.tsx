import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useFetchWorkhoursToday() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["workhoursToday"],
    queryFn: async () => {
      const response = await axios({
        url: "/api/user/:id/workhours/today",
        method: "GET",
      });
      const totalHours = response.data.reduce((acc: number, cur: TWorkhour) => {
        return acc + cur.total;
      }, 0);
      return totalHours;
    },
  });

  if (isError) {
    toast.error("Could not fetch workhours. Please try again later!");
  }

  return {
    data: data ?? 0,
    loading: isLoading,
    isError,
    refetch,
  };
}
