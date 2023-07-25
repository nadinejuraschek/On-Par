import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { TPayment } from "types";

export function usePayments() {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState<TPayment[]>([]);

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/payments",
      method: "GET",
    }).then( res => setPayments(res.data.payments))
      .catch( () => toast.error("Could not fetch payments. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const deletePayment = async (paymentid: string) => {
    setLoading(true);
    await axios.delete( "/api/payments/" + paymentid ).then( () => {
      toast.success("The payment has been deleted successfully!");
      getPayments();
    }).catch(() => toast.error("Could not delete the payment. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const editPayment = async (paymentid: string, updatedPayment: TPayment) => {
    setLoading(true);
    await axios
      .put("/api/payments/" + paymentid, updatedPayment)
      .then(() => {
        toast.success("The payment has been updated successfully!");
        getPayments();
      })
      .catch(() => toast.error("Could not update the payment. Please try again later!"))
      .finally(() => setLoading(false));
  }

  return {
    deletePayment,
    editPayment,
    loading,
    payments,
  };
}
