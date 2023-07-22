import * as dayjs from 'dayjs';
import { LoadingSpinner, Text } from "components";
import { useContext, useMemo, useState } from "react";
import { InfoText, List } from "./styled";
import { Payment } from "./Payment";
import { UserContext } from "contexts";
import { usePayments } from 'hooks';
import { EditPaymentModal } from "./EditPaymentModal";

export const Payments = (): JSX.Element => {
  const { user } = useContext( UserContext );

  const { loading, payments } = usePayments();

  const [editPayment, setEditPayment] = useState(null);

  const currentWeekNum = useMemo(() => dayjs(new Date()).diff(dayjs(user?.startDate), 'week'), [user]);

  const nextDueDate = useMemo(() => dayjs(new Date()).endOf('week').format('ddd DD MMM, YYYY'), []);

  const sortedPayments = useMemo(() => {
    return payments.sort((a, b) => a.week - b.week).filter((payment) => (
      payment.week <= currentWeekNum
    )).reverse();
  }, [currentWeekNum, payments]);

  const renderMissingPaymentsWarning = useMemo(() => {
    const count = payments.filter((payment) => (
      payment.week <= currentWeekNum
    )).filter((payment) => !payment.date).length;

    if (!count) return null;

    return (
      <Text>
        <InfoText>
          <i className="exclamation triangle icon"></i>
          <span>You are missing <strong>{count} stipends</strong>.</span>
        </InfoText>
      </Text>
    );
  }, [currentWeekNum, payments]);

  const renderEntries = useMemo(() => {
    return sortedPayments.map( payment => (
      <Payment
        handleEdit={() => setEditPayment(payment)}
        key={ payment._id }
        payment={ payment }
      />
    ));
  }, [sortedPayments]);

  const renderEditModal = useMemo(() => {
    if (!editPayment) return null;

    return <EditPaymentModal handleClose={() => setEditPayment(null)} originalPayment={editPayment} />;
  }, [editPayment]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <List>
      <Text>
        <InfoText>
          <i className="clock outline icon"></i>
          This week&apos;s stipend is due on: <strong>{nextDueDate}</strong>
        </InfoText>
      </Text>
      {renderMissingPaymentsWarning}
      {renderEntries}
      {renderEditModal}
    </List>
  );
};
