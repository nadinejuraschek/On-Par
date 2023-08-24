import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TGoal } from "types";

interface IUseFetchGoals {
  filter?: TGoalFilter;
  limit?: string;
}
export type TGoalFilter = "completed" | "month" | "upcoming" | "";

export function useFetchGoals({ filter = "", limit = "" }: IUseFetchGoals) {
  const [data, setData] = useState<TGoal[]>(undefined);
  const [loading, setLoading] = useState(false);

  const baseUrl = "/api/user/:id/goals";
  const url = `${baseUrl}?filter=${filter || ""}&limit=${limit || ""}`.trim().replace(/\s\s+/g, " ");

  const getGoals = useCallback(async () => {
    setLoading(true);
    await axios( {
      url,
      method: "GET",
    } ).then( res => {
      setData(res.data);
    })
      .catch( () => {
        toast.error("Could not fetch goals. Please try again later!");
      } ).finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    getGoals();
  }, [getGoals]);

  return {
    data,
    loading,
    refetch: getGoals,
  };
}
