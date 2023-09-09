import { Badge, Button, Icon } from "components";
import * as dayjs from "dayjs";
import * as duration from "dayjs/plugin/duration";
import * as isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { MouseEvent, useCallback, useMemo, useState } from "react";
import { TPayment } from "types";
import {
  Actions,
  Badges,
  Date,
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
  const { date, late, week } = payment;

  const [editPayment, setEditPayment] = useState<TPayment | null>(null);

  const handleEditClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setEditPayment(payment);
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
        <Date>{ renderDateColumn }</Date>
        <Badges>
          {renderLateBadge}
          <Badge label={`Week #${week}`} />
        </Badges>
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
