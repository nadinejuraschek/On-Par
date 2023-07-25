import { Button, DatePicker, Modal, Textarea, ToggleGroup } from "components";
import { useGoals } from "hooks";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Form } from "./styled";
import { IAddGoalModal } from "./types";

export const AddGoalModal = ({ toggleModal }: IAddGoalModal): JSX.Element => {
  const { createGoal } = useGoals();

  const [newGoal, setNewGoal] = useState({
    dueDate: undefined,
    text: undefined,
    type: undefined,
  });

  const handleSubmit = useCallback(() => {
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
      <Button fullWidth handleClick={handleSubmit} type="submit" variant="primary">Save</Button>
    </>
  ), [handleSubmit, toggleModal]);

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
          handleChange={(val: string) => setNewGoal((prev) => ({ ...prev, type: val }))}
          name="type"
          options={toggleOptions}
          value={newGoal.type}
        />
        <Textarea
          fullWidth
          label="Goal"
          name="text"
          handleChange={handleInput}
          placeholder="Goal"
          value={ newGoal.text }
        />
        <DatePicker
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