import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";

export function useDeleteWorkhours() {
  const deleteWorkhours = useCallback(async (workhoursid: string) => {
    const url = `/api/workhours/${workhoursid}`;
    await axios.delete(url).then( () => {
      toast.success("The selected workhours have been deleted successfully!");
    }).catch(() => toast.error("Could not delete the workhours. Please try again later!"));
  }, []);

  const deleteWorkhoursNested = useCallback(async (workhoursid: string, workhoursnestedid: string) => {
    const url = `/api/workhours/${workhoursid}/${workhoursnestedid}`;
    await axios.delete(url).then(() => {
      toast.success("The selected workhours have been deleted successfully!");
    }).catch(() => toast.error("Could not delete the workhours. Please try again later!"));
  }, []);

  return {
    deleteWorkhours,
    deleteWorkhoursNested,
  };
}
