import { useEffect, useState } from 'react';

import { TPayment } from 'types';
import axios from "axios";

export function usePayments() {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState<TPayment[]>([]);
  const [success, setSuccess] = useState(undefined);

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/payments",
      method: "GET",
    }).then( res => setPayments(res.data.payments))
      .catch( () => setError("Could not fetch payments. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const deletePayment = async (paymentid: string) => {
    setLoading(true);
    await axios.delete( "/api/payments/" + paymentid ).then( () => {
      setSuccess("The payment has been deleted successfully!");
      getPayments();
    }).catch(() => setError("Could not delete the payment. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const editPayment = async (paymentid: string, updatedPayment: TPayment) => {
    setLoading(true);
    await axios
      .put('/api/payments/' + paymentid, updatedPayment)
      .then(() => {
        setSuccess('');
        getPayments();
      })
      .catch(() => setError(''))
      .finally(() => setLoading(false));
  }

  return {
    delete: deletePayment,
    edit: editPayment,
    error,
    loading,
    payments,
    success,
  };
}
