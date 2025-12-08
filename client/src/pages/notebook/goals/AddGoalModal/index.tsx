import { Button, DatePicker, Modal, Textarea, ToggleGroup } from "components";
import { createGoal as createGoalFn } from "api";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IAddGoalModal } from "./types";
import { TGoalFormData, goalSchema } from "../../../../schema/goal.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const AddGoalModal = ({ toggleModal }: IAddGoalModal): JSX.Element => {
  const queryClient = useQueryClient();

  const [errors, setErrors] = useState<ZodFormattedError<TGoalFormData> | undefined>(undefined);
  const [newGoal, setNewGoal] = useState<TGoalFormData>({
    dueDate: new Date(),
    text: '',
    type: 'personal',
  });

  const { mutate: createGoal, isPending } = useMutation({
    mutationFn: createGoalFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      toast.success("Your goal has been added successfully!");
    },
    onError: () => {
      toast.error("The goal could not be added. Please try again later!");
    },
  });

  const handleSubmit = useCallback(() => {
    const validation = goalSchema.safeParse(newGoal);

    if (validation.success === false) {
      setErrors(validation.error.format());
      return;
    }

    setErrors(undefined);

    createGoal(newGoal);

    toggleModal();
  }, [createGoal, newGoal, toggleModal]);

  // TODO: handleSubmit in form instead of button
  const actions = useMemo(() => (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button
        fullWidth
        handleClick={handleSubmit}
        loading={isPending}
        type="submit"
        variant="primary"
      >
        Save
      </Button>
    </>
  ), [handleSubmit, isPending, toggleModal]);

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