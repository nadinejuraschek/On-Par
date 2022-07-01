// REACT
import { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
export const PaymentContext = createContext();

export const PaymentProvider = props => {
  const [payments, setPayments] = useState([]);

  // GET
  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = () => {
    axios({
      url: '/api/user/:id/payments',
      method: 'GET',
    }).then(res => {
      setPayments(res.data.payments);
    }).catch(error => console.log('Error: ', error));
  };

  const deletePayment = paymentid => {
    axios.delete('/api/payments/' + paymentid).then(res => {
      getPayments();
    });
  };

  return (
    <PaymentContext.Provider value={{ payments, getPayments, deletePayment }}>
      {props.children}
    </PaymentContext.Provider>
  );
};
