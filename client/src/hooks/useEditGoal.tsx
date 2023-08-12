import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TGoal } from "types";

export function useEditGoal() {
  const editGoal = useCallback(async (goalId: string, updatedGoal: Partial<TGoal>) => {
    const url = `/api/goals/${goalId}`;
    await axios
      .put(url, updatedGoal)
      .then(() => {
        toast.success("The goal has been updated successfully!");
      })
      .catch(() => toast.error("Could not update the goal. Please try again later!"));
  }, []);

  return {
    editGoal,
  };
}
