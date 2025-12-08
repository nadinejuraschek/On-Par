import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export type TNewWorkhourEntry = {
  date: Date;
  hours: {
    duration: number;
    end: Date;
    start: Date;
  }[];
}

export function useCreateWorkhours() {
  const queryClient = useQueryClient();

  const { error, isError, isPending, isSuccess, mutate: createWorkhours } = useMutation({
    mutationFn: async (newWorkhours: TNewWorkhourEntry) => {
      const response = await axios({
        url: "/api/workhours",
        method: "POST",
        data: newWorkhours,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workhours'] });
      toast.success("Your workhours have been added successfully!");
    },
    onError: () => {
      toast.error("The workhours could not be added. Please try again later!");
    },
  });

  return {
    createWorkhours,
    isLoading: isPending,
    isError,
    isSuccess,
    error,
  };
}
