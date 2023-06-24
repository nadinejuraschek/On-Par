import * as dayjs from 'dayjs';

import { PaymentContext, UserContext } from "contexts";
import { useContext, useMemo } from "react";

import { Card } from "components";
import { PaymentEntry } from "./PaymentEntry";
import styles from "./payments.module.css";

export const PaymentTable = (): JSX.Element => {
  const { payments } = useContext( PaymentContext );
  const { user } = useContext( UserContext );

  const sortedPayments = useMemo(() => {
    const today = new Date();
    const currentWeekNum = dayjs(today).diff(dayjs(user?.startDate), 'week');

    return payments.sort((a, b) => a.week - b.week).filter((payment) => (
      payment.week <= currentWeekNum
    ));
  }, [payments, user]);

  const renderEntries = useMemo(() => {
    return sortedPayments.sort((a, b) => a.week - b.week).map( payment => (
      <PaymentEntry
        key={ payment._id }
        paymentid={ payment._id }
        payment={ payment }
      />
    ));
  }, [sortedPayments]);

  return (
    <Card className={ styles.container }>
      <div className={ styles.listHeader }>
        <div className={ styles.icon }></div>
        <div className={ styles.week }>Week</div>
        <div className={ styles.date }>Paid On</div>
        <div className={ styles.late }></div>
      </div>
      <div className={ styles.list }>
        {renderEntries}
      </div>
    </Card>
  );
};
