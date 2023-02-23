import { IPaymentContext, IPaymentProvider } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";

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
    } ).catch( error => console.log( "Error: ", error ) );
  };

  const deletePayment = (paymentid: string): void => {
    axios.delete( "/api/payments/" + paymentid ).then( res => {
      getPayments();
    } );
  };

  return (
    <PaymentContext.Provider value={ { payments, getPayments, deletePayment } }>
      { children }
    </PaymentContext.Provider>
  );
};
