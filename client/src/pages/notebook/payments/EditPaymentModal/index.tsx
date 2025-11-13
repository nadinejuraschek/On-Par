import { Button, DatePicker, Input, Modal } from "components";
import { useUserContext } from "contexts";
import * as dayjs from "dayjs";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TPaymentFormData, paymentSchema } from "schema";
import { ZodFormattedError } from "zod";
import { IEditPaymentModal } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPayment } from "api";

export const EditPaymentModal = ({
  handleClose,
  originalPayment,
}: IEditPaymentModal): JSX.Element => {
  const [{ user }] = useUserContext();
  const queryClient = useQueryClient();

  const [errors, setErrors] = useState<ZodFormattedError<TPaymentFormData> | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [updatedPayment, setUpdatedPayment] = useState(originalPayment);

  const {
    // TODO: display error toast
    // error,
    // TODO: display loading
    // isLoading,
    mutate,
  } = useMutation({
    mutationFn: editPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });

  const handleAmountChange = useCallback((event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const amount = parseFloat(target.value);
    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, amount }));
  }, []);

  const handleDateChange = useCallback((selected: Date) => {
    if (!user?.startDate) return;

    const dateInWeek = dayjs(user.startDate).add(dayjs.duration({ "weeks": originalPayment.week }));
    const endOfWeek = dayjs(dateInWeek).endOf("week");
    const isPaymentOnTime = dayjs(selected).isSameOrBefore(endOfWeek);

    setUpdatedPayment(updatedPayment => ({ ...updatedPayment, date: selected, late: !isPaymentOnTime }));
  }, [originalPayment, user]);

  const handleSubmit = useCallback(() => {
    if (!originalPayment._id) return;

    setSubmitting(true);

    const validation = paymentSchema.safeParse(updatedPayment);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setSubmitting(false);
      return;
    }

    setErrors(undefined);

    mutate(updatedPayment);
    setSubmitting(false);
    handleClose();
  }, [
    handleClose,
    mutate,
    originalPayment,
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
      <Input
        fullWidth
        handleChange={handleAmountChange}
        icon="dollar"
        label="Amount"
        name="amount"
        placeholder="195.95"
        type="number"
        step="0.01"
        value={updatedPayment.amount || 195.95}
      />
      <DatePicker
        error={errors?.date?._errors?.[0] && errors.date._errors[0]}
        format="MM/dd/yyyy"
        handleChange={handleDateChange}
        icon="calendar"
        label="Stipend was paid on"
        name="date"
        value={updatedPayment.date}
      />
    </Modal>
  );
}