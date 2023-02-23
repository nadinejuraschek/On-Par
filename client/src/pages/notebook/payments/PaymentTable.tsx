import { Card } from "components";
import { PaymentContext } from "contexts/PaymentContext";
import { PaymentEntry } from "./PaymentEntry";
import styles from "./payments.module.css";
import { useContext } from "react";

export const PaymentTable = (): JSX.Element => {
  const {
    /* @ts-ignore-next-line */
    deletePayment,
    // getPayments,
    /* @ts-ignore-next-line */
    payments,
   } = useContext( PaymentContext );
  const sortedPayments = payments.reverse();

  return (
    <Card className={ styles.container }>
      <div className={ styles.listHeader }>
        <div className={ styles.week }>Week</div>
        <div className={ styles.date }>Paid On</div>
        <div className={ styles.late }>Late?</div>
      </div>
      <div className={ styles.list }>
        { sortedPayments.map( payment => (
          <PaymentEntry
            key={ payment._id }
            paymentid={ payment._id }
            payment={ payment }
            deletePayment={ deletePayment }
            // getPayments={ getPayments }
          />
        ) ) }
      </div>
    </Card>
  );
};
