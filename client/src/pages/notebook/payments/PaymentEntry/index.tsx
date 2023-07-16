import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Button } from 'components';
import { useCallback, useContext, useMemo, useState } from 'react';
import { Actions, Badges, Date, ItemIcon, LateBadge, ListItem, StyledDatePicker, Week } from './styled';
import { IPaymentEntry } from "./types";
import { UserContext } from 'contexts';

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

export const PaymentEntry = ( {
  editPayment,
  payment,
  paymentid,
}: IPaymentEntry ): JSX.Element => {
  const { user } = useContext(UserContext);

  const [showEdit, setShowEdit] = useState(false);
  const [updatedPayment, setUpdatedPayment] = useState(payment);

  const { date, late, week } = payment;

  const handleEdit = useCallback((event) => {
    event.preventDefault();

    editPayment(paymentid, updatedPayment);

    showEdit === true && setShowEdit(false);
  }, [editPayment, paymentid, showEdit, updatedPayment]);

  const handleDateChange = useCallback((selected: Date) => {
    const dateInWeek = dayjs(user.startDate).add(dayjs.duration({'weeks': week}));
    const endOfWeek = dayjs(dateInWeek).endOf('week');
    const isPaymentOnTime = dayjs(selected).isSameOrBefore(endOfWeek);

    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, date: selected, late: !isPaymentOnTime }));
  }, [user, week]);

  const renderWarningIcon = useMemo(() => {
    if (date) return null;
    return <i className="exclamation triangle icon" />;
  }, [date]);

  const renderDateColumn = useMemo(() => {
    if (!showEdit) {
      return date ? <span>{dayjs(date).format('MM/DD/YYYY')}</span> : null;
    }

    return (
      <StyledDatePicker
        format="MM/dd/yyyy"
        handleChange={handleDateChange}
        name="date"
        value={updatedPayment.date}
      />
    );
  }, [date, handleDateChange, showEdit, updatedPayment]);

  const renderBadges = useMemo(() => {
    if (!late) return null;
    return <LateBadge icon={<i className="clock outline icon"></i>} label="Paid Late" />;
  }, [late]);

  const renderButtonIcon = useMemo(() => showEdit ? <i className="checkmark icon"></i> : <i className="edit outline icon"></i>, [showEdit]);

  return (
    <ListItem paidLate={late}>
      <ItemIcon>{ renderWarningIcon }</ItemIcon>
      <Week>{ week }</Week>
      <Date>{ renderDateColumn }</Date>
      <Badges>{renderBadges}</Badges>
      <Actions>
        <Button
          handleClick={(event) => {
            if (!showEdit) {
              setShowEdit(!showEdit);
              return;
            }
            handleEdit(event);
          }}
          square
          variant="tertiary"
        >
          {renderButtonIcon}
        </Button>
      </Actions>
    </ListItem>
  );
};
