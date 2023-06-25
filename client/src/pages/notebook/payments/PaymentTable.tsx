import * as dayjs from 'dayjs';

import { Card, LoadingSpinner } from "components";
import { useContext, useMemo } from "react";

import { PaymentEntry } from "./PaymentEntry";
import { UserContext } from "contexts";
import styles from "./payments.module.css";
import { toast } from 'react-toastify';
import { usePayments } from 'hooks';

export const PaymentTable = (): JSX.Element => {
  const { user } = useContext( UserContext );

  const { editPayment, loading, payments } = usePayments();

  const currentWeekNum = useMemo(() => dayjs(new Date()).diff(dayjs(user?.startDate), 'week'), [user]);

  const sortedPayments = useMemo(() => {
    return payments.sort((a, b) => a.week - b.week).filter((payment) => (
      payment.week <= currentWeekNum
    )).reverse();
  }, [currentWeekNum, payments]);

  const renderEntries = useMemo(() => {
    return sortedPayments.map( payment => (
      <PaymentEntry
        editPayment={editPayment}
        key={ payment._id }
        paymentid={ payment._id }
        payment={ payment }
      />
    ));
  }, [editPayment, sortedPayments]);

  if (loading) {
    return <LoadingSpinner />;
  }

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
