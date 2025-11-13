import { Banner, Header, Icon, LoadingSpinner, Text } from "components";
import { useUserContext } from "contexts";
import * as dayjs from "dayjs";
import { useMemo } from "react";
import { PaymentList } from "./PaymentList";
import { BannerWrapper, InfoText } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { getPayments } from "api";

const Payments = (): JSX.Element => {
  const [{ user }] = useUserContext();

  const {
    data: payments,
    // TODO: display error message
    // error,
    isLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: getPayments,
  });

  const currentWeekNum = useMemo(() => dayjs(new Date()).diff(dayjs(user?.startDate), "week") + 1, [user]);

  const nextDueDate = useMemo(() => dayjs(new Date()).endOf("week").format("ddd DD MMM, YYYY"), []);

  const sortedPayments = useMemo(() => {
    if (!payments) return [];

    return payments.sort((a, b) => a.week - b.week).filter((payment) => payment.week <= currentWeekNum).reverse();
  }, [currentWeekNum, payments]);

  const renderMissingPaymentsWarning = useMemo(() => {
    if (!payments) return null;

    const count = payments.filter((payment) => (
      payment.week <= currentWeekNum
    )).filter((payment) => !payment.date).length;

    if (!count) return null;

    return (
      <Banner variant="warning">
        <Text>
          <InfoText>
            <Icon color="var(--warning_500)" type="warning" />
            <span>You are missing <strong>{count} stipends</strong>.</span>
          </InfoText>
        </Text>
      </Banner>
    );
  }, [currentWeekNum, payments]);

  const renderList = useMemo(() => {
    if (isLoading) return <LoadingSpinner />;

    if (sortedPayments.length === 0) return null;

    return <PaymentList entries={sortedPayments} />;
  }, [isLoading, sortedPayments]);

  return (
    <>
      <Header pageTitle="Payments" />
      <BannerWrapper>
        <Banner variant="secondary">
          <Text>
            <InfoText>
              <Icon color="var(--grey_500)" type="clock" />
              This week&apos;s stipend is due on: <strong>{nextDueDate}</strong>
            </InfoText>
          </Text>
        </Banner>
        {renderMissingPaymentsWarning}
      </BannerWrapper>
      {renderList}
    </>
  );
};

export default Payments;