import { Banner, LoadingSpinner, Text } from "components";
import { UserContext } from "contexts";
import * as dayjs from "dayjs";
import { usePayments } from "hooks";
import { useContext, useMemo, useState } from "react";
import { EditPaymentModal } from "./EditPaymentModal";
import { Payment } from "./Payment";
import { BannerWrapper, InfoText, List } from "./styled";

export const Payments = (): JSX.Element => {
  const { user } = useContext( UserContext );

  const { loading, payments } = usePayments();

  const [editPayment, setEditPayment] = useState(null);

  const currentWeekNum = useMemo(() => dayjs(new Date()).diff(dayjs(user?.startDate), "week"), [user]);

  const nextDueDate = useMemo(() => dayjs(new Date()).endOf("week").format("ddd DD MMM, YYYY"), []);

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
      <Banner variant="warning">
        <Text>
          <InfoText>
            <i className="exclamation triangle icon" style={{ color: "var(--warning_500)" }}></i>
            <span>You are missing <strong>{count} stipends</strong>.</span>
          </InfoText>
        </Text>
      </Banner>
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
    <>
      <BannerWrapper>
        <Banner variant="secondary">
          <Text>
            <InfoText>
              <i className="clock outline icon" style={{ color: "var(--grey_500)" }}></i>
              This week&apos;s stipend is due on: <strong>{nextDueDate}</strong>
            </InfoText>
          </Text>
        </Banner>
        {renderMissingPaymentsWarning}
      </BannerWrapper>
      <List>
        {renderEntries}
      </List>
      {renderEditModal}
    </>
  );
};
