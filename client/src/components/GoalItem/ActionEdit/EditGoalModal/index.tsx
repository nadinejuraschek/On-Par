import { Button, DatePicker, Modal, Textarea, ToggleGroup } from "components";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TGoalType } from "types";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IAddGoalModal } from "./types";
import { TGoalFormData, goalSchema } from "../../../../schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editGoal as editGoalFn } from 'api';
import { toast } from "react-toastify";

export const EditGoalModal = ({
  checked,
  dueDate,
  id,
  text,
  toggleModal,
  type,
}: IAddGoalModal): JSX.Element => {
  const queryClient = useQueryClient();

  const [errors, setErrors] = useState<ZodFormattedError<TGoalFormData> | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [updatedGoal, setUpdatedGoal] = useState({
    checked,
    dueDate: dueDate ? new Date(dueDate) : new Date(),
    text,
    type,
  });

  const { isPending, mutate: editGoal } = useMutation({
    mutationFn: () => editGoalFn({ goalId: id, updatedGoal }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      toast.success("The goal has been updated successfully!");
    },
    onError: () => {
      toast.error("Could not update the goal. Please try again later!");
    },
  });

  const handleToggleType = useCallback((val: string) => {
    setUpdatedGoal((prev) => ({ ...prev, type: val as TGoalType }));
  }, []);

  const handleSubmit = useCallback(() => {
    setSubmitting(true);
    const validation = goalSchema.safeParse(updatedGoal);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setSubmitting(false);
      return;
    }

    setErrors(undefined);

    editGoal();
    setSubmitting(false);
    toggleModal();
  }, [editGoal,
    toggleModal,
    updatedGoal]);

  // TODO: handleSubmit in form instead of button
  const actions = useMemo(() => (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button
        fullWidth
        handleClick={handleSubmit}
        loading={submitting || isPending}
        type="submit"
        variant="primary"
      >
        Save
      </Button>
    </>
  ), [handleSubmit, isPending, submitting, toggleModal]);

  const toggleOptions = [
    { label: "Education", value: "education" }, { label: "Personal", value: "personal" }, { label: "Travel", value: "travel" },
  ];

  const handleInput = useCallback((event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setUpdatedGoal( prev => ( { ...prev, [target.name]: target.value } ) )
  }, []);

  return (
    <Modal
      actions={actions}
      handleClose={toggleModal}
      title="Edit Goal"
    >
      <Form>
        <ToggleGroup
          error={errors?.type?._errors?.[0] && errors.type._errors[0]}
          handleChange={handleToggleType}
          name="type"
          options={toggleOptions}
          value={updatedGoal.type}
        />
        <Textarea
          error={errors?.text?._errors?.[0] && errors.text._errors[0]}
          fullWidth
          label="Goal"
          name="text"
          handleChange={handleInput}
          placeholder="Goal"
          value={updatedGoal.text}
        />
        <DatePicker
          error={errors?.dueDate?._errors?.[0] && errors.dueDate._errors[0]}
          format="MM/dd/yyyy"
          fullWidth
          handleChange={(date: Date) => setUpdatedGoal((prev) => ({ ...prev, dueDate: date }))}
          label="Due Date"
          name="dueDate"
          value={updatedGoal.dueDate}
        />
      </Form>
    </Modal>
  );
}