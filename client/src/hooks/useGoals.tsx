import axios from "axios";
import { useCallback, useState } from "react";

import { toast } from "react-toastify";
import { TGoal } from "types";

export function useGoals() {
  const [loading, setLoading] = useState(false);

  const editGoal = useCallback(async (goalId: string, updatedGoal: Omit<TGoal, "_id">, callback?: () => void) => {
    setLoading(true);
    await axios
      .put(`/api/goals/${goalId}`, updatedGoal)
      .then(() => {
        toast.success("The goal has been updated successfully!");
      })
      .catch(() => toast.error("Could not update the goal. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }, []);

  const checkGoal = useCallback(async (goalId: string, callback?: () => void) => {
    setLoading(true);
    await axios.put(`/api/goals/${goalId}`, { checked: true } )
      .then( () => {
      } )
      .catch( () => {
        toast.error("Could not update the goal. Please try again later!")
        // console.debug( "Error when checking off goal: " + error );
      } )
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }, []);

  return {
    checkGoal,
    editGoal,
    loading,
  };
}
