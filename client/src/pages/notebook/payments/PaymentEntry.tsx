import * as dayjs from 'dayjs';

import { Badge, Button, DatePicker } from 'components';
import { useCallback, useContext, useMemo, useState } from 'react';

import { IPaymentEntry } from "./types";
import { PaymentContext } from 'contexts';
import axios from 'axios';
import styles from "./payments.module.css";

export const PaymentEntry = ( {
  payment,
  paymentid,
}: IPaymentEntry ): JSX.Element => {
  const { getPayments } = useContext(PaymentContext);
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
    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, date: selected }));
  }, []);

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
          <i className="edit outline icon"></i>
        </Button>
        <Button
          className={ styles.actionButton }
          handleClick={ (event) => {
            handleDateChange(new Date());
            handleEdit(event);
          } }
          square
          variant="tertiary"
        >
          <i className="checkmark icon"></i>
        </Button>
      </div>
    </div>
  );
};
