import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TGoal } from "types";

export function useCreateGoal() {
  const createGoal = useCallback(async (newGoal: Omit<TGoal, "_id" | "checked">) => {
    await axios( {
      url: "/api/goals",
      method: "POST",
      data: {
        ...newGoal,
        checked: false,
      },
    } )
      .then( () => toast.success("Your goal has been added successfully!"))
      .catch( () => toast.error("The goal could not be added. Please try again later!"));
  }, []);

  return {
    createGoal,
  };
}
