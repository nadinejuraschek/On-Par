import { Button, DatePicker, Modal, Textarea, ToggleGroup } from "components";
import { useGoals } from "hooks";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TGoalType } from "types";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IAddGoalModal } from "./types";
import { TGoalFormData, goalSchema } from "../../../schema";

export const EditGoalModal = ({
  checked,
  dueDate,
  id,
  text,
  toggleModal,
  type,
}: IAddGoalModal): JSX.Element => {
  const { editGoal, loading } = useGoals();

  const [errors, setErrors] = useState<ZodFormattedError<TGoalFormData> | undefined>(undefined);
  const [updatedGoal, setUpdatedGoal] = useState({
    checked,
    dueDate: dueDate ? new Date(dueDate) : new Date(),
    text,
    type,
  });

  const handleSubmit = useCallback(() => {
    const validation = goalSchema.safeParse(updatedGoal);

    if (validation.success === false) {
      setErrors(validation.error.format());
      return;
    }

    setErrors(undefined);

    editGoal(id, updatedGoal, toggleModal);
  }, [editGoal,
    id,
    toggleModal,
    updatedGoal]);

  // TODO: handleSubmit in form instead of button
  const actions = useMemo(() => (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button
        fullWidth
        handleClick={handleSubmit}
        loading={loading}
        type="submit"
        variant="primary"
      >
        Save
      </Button>
    </>
  ), [handleSubmit, loading, toggleModal]);

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
          handleChange={(val: TGoalType) => setUpdatedGoal((prev) => ({ ...prev, type: val }))}
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