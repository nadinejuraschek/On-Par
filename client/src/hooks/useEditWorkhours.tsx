import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useEditWorkhours() {
  const queryClient = useQueryClient();

  const { error, isError, isPending, isSuccess, mutate: editWorkhours } = useMutation({
    mutationFn: async ({ workhoursId, updatedWorkhours }: { workhoursId: string; updatedWorkhours: TWorkhour }) => {
      const url = `/api/workhours/${workhoursId}`;
      const response = await axios.put(url, updatedWorkhours);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workhours'] });
      toast.success("The workhours has been updated successfully!");
    },
    onError: () => {
      toast.error("Could not update the workhours. Please try again later!");
    },
  });

  return {
    editWorkhours,
    isLoading: isPending,
    isError,
    isSuccess,
    error,
  };
}
