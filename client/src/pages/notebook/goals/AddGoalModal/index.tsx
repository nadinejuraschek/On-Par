import { Button, DatePicker, Modal, Textarea, ToggleGroup } from "components";
import { useGoals } from "hooks";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IAddGoalModal } from "./types";
import { TGoalFormData, goalSchema } from "../../../../schema/goal.schema";

export const AddGoalModal = ({ toggleModal }: IAddGoalModal): JSX.Element => {
  const { createGoal, loading } = useGoals();

  const [errors, setErrors] = useState<ZodFormattedError<TGoalFormData> | undefined>(undefined);
  const [newGoal, setNewGoal] = useState({
    dueDate: undefined,
    text: undefined,
    type: undefined,
  });

  const handleSubmit = useCallback(() => {
    const validation = goalSchema.safeParse(newGoal);

    if (validation.success === false) {
      setErrors(validation.error.format());
      return;
    }

    setErrors(undefined);

    createGoal(newGoal, () => {
      setNewGoal({
        dueDate: undefined,
        text: undefined,
        type: undefined,
      });
      toggleModal();
    });
  }, [createGoal, newGoal, toggleModal]);

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
    const name = target.name;
    const value = target.value;
    setNewGoal( prev => ( { ...prev, [name]: value } ) );
  }, []);

  return (
    <Modal
      actions={actions}
      handleClose={toggleModal}
      title="New Goal"
    >
      <Form>
        <ToggleGroup
          error={errors?.type?._errors?.[0] && errors.type._errors[0]}
          handleChange={(val: string) => setNewGoal((prev) => ({ ...prev, type: val }))}
          name="type"
          options={toggleOptions}
          value={newGoal.type}
        />
        <Textarea
          error={errors?.text?._errors?.[0] && errors.text._errors[0]}
          fullWidth
          label="Goal"
          name="text"
          handleChange={handleInput}
          placeholder="Goal"
          value={ newGoal.text }
        />
        <DatePicker
          error={errors?.dueDate?._errors?.[0] && errors.dueDate._errors[0]}
          format="MM/dd/yyyy"
          fullWidth
          handleChange={(date: Date) => setNewGoal((prev) => ({ ...prev, dueDate: date }))}
          label="Due Date"
          name="dueDate"
          value={newGoal.dueDate}
        />
      </Form>
    </Modal>
  );
}