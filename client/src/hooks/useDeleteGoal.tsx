import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";

export function useDeleteGoal() {
  const deleteGoal = useCallback(async (goalid: string) => {
    const url = `/api/goals/${goalid}`;
    await axios.delete(url).then( () => {
      toast.success("The goal has been deleted successfully!");
    }).catch(() => toast.error("Could not delete the goal. Please try again later!"));
  }, []);

  return {
    deleteGoal,
  };
}
