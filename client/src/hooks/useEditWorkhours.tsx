import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useEditWorkhours() {
  const editWorkhours = useCallback(async (workhoursid: string, updatedWorkhours: TWorkhour) => {
    const url = `/api/workhours/${workhoursid}`;
    await axios
      .put(url, updatedWorkhours)
      .then(() => {
        toast.success("The workhours has been updated successfully!");
      })
      .catch(() => toast.error("Could not update the workhours. Please try again later!"));
  }, []);

  return {
    editWorkhours,
  };
}
