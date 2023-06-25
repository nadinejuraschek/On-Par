import * as dayjs from 'dayjs';

import { PaymentContext, UserContext } from "contexts";
import { useContext, useMemo } from "react";

import { Card } from "components";
import { PaymentEntry } from "./PaymentEntry";
import styles from "./payments.module.css";

export const PaymentTable = (): JSX.Element => {
  const { payments } = useContext( PaymentContext );
  const { user } = useContext( UserContext );

  const currentWeekNum = useMemo(() => dayjs(new Date()).diff(dayjs(user?.startDate), 'week'), [user]);

  const sortedPayments = useMemo(() => {
    return payments.sort((a, b) => a.week - b.week).filter((payment) => (
      payment.week <= currentWeekNum
    )).reverse();
  }, [currentWeekNum, payments]);

  const renderEntries = useMemo(() => {
    return sortedPayments.map( payment => (
      <PaymentEntry
        currentWeekNum={currentWeekNum}
        key={ payment._id }
        paymentid={ payment._id }
        payment={ payment }
      />
    ));
  }, [currentWeekNum, sortedPayments]);

  return (
    <Card className={ styles.container }>
      <div className={ styles.listHeader }>
        <div className={ styles.icon }></div>
        <div className={ styles.week }>Week</div>
        <div className={ styles.date }>Paid On</div>
        <div className={ styles.due }></div>
        <div className={ styles.actions }></div>
      </div>
      <div className={ styles.list }>
        {renderEntries}
      </div>
    </Card>
  );
};
