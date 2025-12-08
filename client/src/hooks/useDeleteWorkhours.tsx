import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useDeleteWorkhours() {
  const queryClient = useQueryClient();

  const { error, isError, isPending, isSuccess, mutate: deleteWorkhours } = useMutation({
    mutationFn: async (workhoursId: string) => {
      const url = `/api/workhours/${workhoursId}`;
      const response = await axios.delete(url);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workhours'] });
      toast.success("The selected workhours has been deleted successfully!");
    },
    onError: () => {
      toast.error("Could not delete the workhours. Please try again later!");
    },
  });

  return {
    deleteWorkhours,
    isLoading: isPending,
    isError,
    isSuccess,
    error,
  };
}
