import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TPayment } from "types";

export function useFetchPayments() {
  const [data, setData] = useState<TPayment[]>(undefined);
  const [loading, setLoading] = useState(false);

  const getPayments = useCallback(async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/payments",
      method: "GET",
    }).then( res => setData(res.data))
      .catch( () => toast.error("Could not fetch payments. Please try again later!"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getPayments();
  }, [getPayments]);

  return {
    data,
    loading,
    refetch: getPayments,
  };
}
