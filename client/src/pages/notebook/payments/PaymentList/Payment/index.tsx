import { Badge, Button, Icon, Text } from "components";
import * as dayjs from "dayjs";
import * as duration from "dayjs/plugin/duration";
import * as isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { MouseEvent, useCallback, useMemo, useState } from "react";
import { TPayment } from "types";
import {
  Actions,
  Badges,
  Body,
  DateCol,
  DayMonth,
  LateBadge,
  ListItem,
  Year,
} from "./styled";
import { IPaymentEntry } from "./types";
import { EditPaymentModal } from "../../EditPaymentModal";

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

export const Payment = ( {
  payment,
  refetchPayments,
}: IPaymentEntry ): JSX.Element => {
  const { amount, date, late, week } = payment;

  const [editPayment, setEditPayment] = useState<TPayment | null>(null);

  const handleEditClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    const dateAsDate = typeof payment.date === "string" ? new Date(payment.date) : payment.date;
    setEditPayment({ ...payment, amount: payment.amount ?? 195.95, date: dateAsDate });
  }, [payment]);

  const renderDateColumn = useMemo(() => {
    if (!date) return null;

    return (
      <>
        <DayMonth>{dayjs(date).format("DD MMM")}</DayMonth>
        <Year>{dayjs(date).format("YYYY")}</Year>
      </>
    );
  }, [date]);

  const renderPayment = useMemo(() => {
    if (!amount) return null;

    const formattedAmount = new Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(amount);
    return <Text size="lg">{formattedAmount}</Text>;
  }, [amount]);

  const renderLateBadge = useMemo(() => {
    if (!late) return null;

    return <LateBadge icon={<Icon color="var(--error_800)" type="clock" />} label="Paid Late" />;
  }, [late]);

  const renderEditModal = useMemo(() => {
    if (!editPayment) return null;

    return (
      <EditPaymentModal
        handleClose={() => setEditPayment(null)}
        originalPayment={editPayment}
        refetchPayments={refetchPayments}
      />
    );
  }, [editPayment, refetchPayments]);

  return (
    <>
      <ListItem $warning={!date}>
        <DateCol>{ renderDateColumn }</DateCol>
        <Body>
          {renderPayment}
          <Badges>
            {renderLateBadge}
            <Badge label={`Week #${week}`} />
          </Badges>
        </Body>
        <Actions>
          <Button
            handleClick={handleEditClick}
            square
            variant="tertiary"
          >
            <Icon type="pen" />
          </Button>
        </Actions>
      </ListItem>
      {renderEditModal}
    </>
  );
};
