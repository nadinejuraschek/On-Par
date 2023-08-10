import axios from "axios";
import { useCallback, useState } from "react";

import { toast } from "react-toastify";
import { TGoal } from "types";

export function useGoals() {
  const [loading, setLoading] = useState(false);

  const createGoal = useCallback(async (newGoal: Omit<TGoal, "_id" | "checked">, callback?: () => void) => {
    setLoading(true);
    await axios( {
      url: "/api/goals",
      method: "POST",
      data: {
        ...newGoal,
        checked: false,
      },
    } )
      .then( () => {
        toast.success("Your goal has been added successfully!");
      } )
      .catch( () => toast.error("The goal could not be added. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }, []);

  const deleteGoal = useCallback(async (goalId: string, callback?: () => void) => {
    setLoading(true);
    await axios.delete(`/api/goals/${goalId}`).then( () => {
      toast.success("The goal has been deleted successfully!");
    }).catch(() => toast.error("Could not delete the goal. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }, []);

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
    createGoal,
    deleteGoal,
    editGoal,
    loading,
  };
}
