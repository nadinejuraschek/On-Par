import { Button, DatePicker, Modal } from "components";
import { UserContext } from "contexts";
import * as dayjs from "dayjs";
import { useEditPayment } from "hooks";
import { useCallback, useContext, useMemo, useState } from "react";
import { TPaymentFormData, paymentSchema } from "schema";
import { ZodFormattedError } from "zod";
import { IEditPaymentModal } from "./types";

export const EditPaymentModal = ({
  handleClose,
  originalPayment,
  refetchPayments,
}: IEditPaymentModal): JSX.Element => {
  const { user } = useContext(UserContext);

  const { editPayment } = useEditPayment();

  const [errors, setErrors] = useState<ZodFormattedError<TPaymentFormData> | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [updatedPayment, setUpdatedPayment] = useState(originalPayment);

  const handleDateChange = useCallback((selected: Date) => {
    const dateInWeek = dayjs(user.startDate).add(dayjs.duration({ "weeks": originalPayment.week }));
    const endOfWeek = dayjs(dateInWeek).endOf("week");
    const isPaymentOnTime = dayjs(selected).isSameOrBefore(endOfWeek);

    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, date: selected, late: !isPaymentOnTime }));
  }, [originalPayment, user]);

  const handleSubmit = useCallback(() => {
    setSubmitting(true);

    const validation = paymentSchema.safeParse(updatedPayment);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setSubmitting(false);
      return;
    }

    setErrors(undefined);

    editPayment(originalPayment._id, updatedPayment);
    setSubmitting(false);
    handleClose();
    refetchPayments();
  }, [editPayment,
    handleClose,
    originalPayment,
    refetchPayments,
    updatedPayment]);


  // TODO: move submit to form instead of button
  const renderEditActions = useMemo(() => {
    return (
      <>
        <Button fullWidth handleClick={handleClose}>Cancel</Button>
        <Button
          fullWidth
          handleClick={handleSubmit}
          loading={submitting}
          type="submit"
          variant="primary"
        >
          Save
        </Button>
      </>
    );
  }, [handleClose, handleSubmit, submitting]);

  return (
    <Modal actions={renderEditActions} handleClose={handleClose} title="Edit Payment">
      <DatePicker
        error={errors?.date?._errors?.[0] && errors.date._errors[0]}
        format="MM/dd/yyyy"
        handleChange={handleDateChange}
        label="Stipend was paid on"
        name="date"
        value={updatedPayment.date}
      />
    </Modal>
  );
}