import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TWorkhour } from "types";

export function useFetchWorkhours() {
  const [data, setData] = useState<TWorkhour[]>(undefined);
  const [loading, setLoading] = useState(false);

  const getWorkhours = useCallback(async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/workhours",
      method: "GET",
    } ).then( res => setData(res.data))
      .catch( () => toast.error("Could not fetch workhours. Please try again later!"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getWorkhours();
  }, [getWorkhours]);

  return {
    data,
    loading,
    refetch: getWorkhours,
  };
}
