import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { Badge, Button, DatePicker } from 'components';
import { PaymentContext, UserContext } from 'contexts';
import { useCallback, useContext, useMemo, useState } from 'react';

import { IPaymentEntry } from "./types";
import axios from 'axios';
import styles from "./payments.module.css";

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

export const PaymentEntry = ( {
  // currentWeekNum,
  payment,
  paymentid,
}: IPaymentEntry ): JSX.Element => {
  const { getPayments } = useContext(PaymentContext);
  const { user } = useContext(UserContext);

  const [showEdit, setShowEdit] = useState(false);
  const [updatedPayment, setUpdatedPayment] = useState(payment);

  const { date, late, week } = payment;

  const handleEdit = useCallback((event) => {
    event.preventDefault();

    axios
      .put('/api/payments/' + paymentid, updatedPayment)
      .then(res => {
        getPayments();
        showEdit === true && setShowEdit(false);
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  }, [getPayments, paymentid, showEdit, updatedPayment]);

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
      <DatePicker
        className={ styles.inlineInput }
        format="MM/dd/yyyy"
        handleChange={handleDateChange}
        name="date"
        value={updatedPayment.date}
      />
    );
  }, [date, handleDateChange, showEdit, updatedPayment]);

  const renderBadges = useMemo(() => {
    if (!late) return null;
    return <Badge className={ styles.lateBadge } icon={<i className="clock outline icon"></i>} label="Paid Late" />;
  }, [late]);

  const renderButtonIcon = useMemo(() => showEdit ? <i className="checkmark icon"></i> : <i className="edit outline icon"></i>, [showEdit]);

  return (
    <div className={ `${ styles.listItem } ${
        late ? styles.paidLate : ""
      }` }>
      <div className={ styles.itemIcon }>
        { renderWarningIcon }
      </div>
      <div className={ styles.itemWeek }>{ week }</div>
      <div className={ styles.itemDate }>
        { renderDateColumn }
      </div>
      <div className={ styles.itemDue }>
        {renderBadges}
      </div>
      <div className={ styles.actions }>
        <Button
          className={ styles.actionButton }
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
      </div>
    </div>
  );
};
