import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TPayment } from "types";

export function useEditPayment() {
  const editPayment = useCallback(async (paymentid: string, updatedPayment: TPayment) => {
    const url = `/api/payments/${paymentid}`;
    await axios
      .put(url, updatedPayment)
      .then(() => {
        toast.success("The payment has been updated successfully!");
      })
      .catch(() => toast.error("Could not update the payment. Please try again later!"));
  }, []);

  return {
    editPayment,
  };
}
