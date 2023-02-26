import { IPaymentContext, IPaymentProvider } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

export const PaymentContext = createContext<IPaymentContext>({});

export const PaymentProvider = ({ children }: IPaymentProvider): JSX.Element => {
  const [payments, setPayments] = useState( [] );

  useEffect( () => {
    getPayments();
  }, [] );

  const getPayments = (): void => {
    axios( {
      url: "/api/user/:id/payments",
      method: "GET",
    } ).then( res => {
      setPayments( res.data.payments );
    } ).catch( () => {
      toast.error("Could not fetch payments. Please try again later!");
      // console.debug( "Error when fetching payments: ", error );
    });
  };

  const deletePayment = (paymentid: string): void => {
    axios.delete( "/api/payments/" + paymentid ).then( () => {
      toast.success("The payment has been deleted successfully!");
      getPayments();
    } ).catch(() => {
      toast.error("Could not delete the payment. Please try again later!");
      // console.debug( "Error when deleting a payment: ", error );
    });
  };

  return (
    <PaymentContext.Provider value={ { payments, getPayments, deletePayment } }>
      { children }
    </PaymentContext.Provider>
  );
};
