import * as dayjs from 'dayjs';
import { LoadingSpinner } from "components";
import { useContext, useMemo } from "react";
import { CardContainer, List, ListHeader, ListHeaderCol } from "./styled";
import { PaymentEntry } from "./PaymentEntry";
import { UserContext } from "contexts";
import { usePayments } from 'hooks';

export const Payments = (): JSX.Element => {
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
    <CardContainer>
      <ListHeader>
        <ListHeaderCol></ListHeaderCol>
        <ListHeaderCol>Week</ListHeaderCol>
        <ListHeaderCol>Paid On</ListHeaderCol>
        <ListHeaderCol></ListHeaderCol>
        <ListHeaderCol></ListHeaderCol>
      </ListHeader>
      <List>
        {renderEntries}
      </List>
    </CardContainer>
  );
};
