import * as dayjs from 'dayjs';
import { useCallback, useContext, useMemo, useState } from "react";
import { Button, DatePicker, Modal } from "components";
import { IEditPaymentModal } from "./types";
import { usePayments } from "hooks";
import { UserContext } from 'contexts';

export const EditPaymentModal = ({ handleClose, originalPayment }: IEditPaymentModal): JSX.Element => {
  const { user } = useContext(UserContext);

  const { editPayment } = usePayments();

  const [updatedPayment, setUpdatedPayment] = useState(originalPayment);

  const handleDateChange = useCallback((selected: Date) => {
    const dateInWeek = dayjs(user.startDate).add(dayjs.duration({'weeks': originalPayment.week}));
    const endOfWeek = dayjs(dateInWeek).endOf('week');
    const isPaymentOnTime = dayjs(selected).isSameOrBefore(endOfWeek);

    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, date: selected, late: !isPaymentOnTime }));
  }, [originalPayment, user]);

  const handleSubmit = useCallback(() => {
    editPayment(originalPayment._id, updatedPayment);
    handleClose();
  }, [editPayment, handleClose, originalPayment, updatedPayment]);


  // TODO: move submit to form instead of button
  const renderEditActions = useMemo(() => {
    return (
      <>
        <Button fullWidth handleClick={handleClose}>Cancel</Button>
        <Button fullWidth handleClick={handleSubmit} type="submit" variant="primary">Save</Button>
      </>
    );
  }, [handleClose, handleSubmit]);

  return (
    <Modal actions={renderEditActions} handleClose={handleClose} title="Edit Payment">
      <DatePicker
        label="Stipend was paid on"
        format="MM/dd/yyyy"
        handleChange={handleDateChange}
        name="date"
        value={updatedPayment.date}
      />
    </Modal>
  );
}