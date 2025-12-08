import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useFetchWorkhours() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["workhours"],
    queryFn: async () => {
      const response = await axios({
        url: "/api/user/:id/workhours",
        method: "GET",
      });
      return response.data;
    },
  });

  if (isError) {
    toast.error("Could not fetch workhours. Please try again later!");
  }

  return {
    data: data ?? [],
    loading: isLoading,
    isError,
    refetch,
  };
}
