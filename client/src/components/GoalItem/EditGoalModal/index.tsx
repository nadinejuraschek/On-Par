import { Button, DatePicker, Modal, Textarea, ToggleGroup } from 'components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { Form } from './styled';
import { IAddGoalModal } from './types';
import { TGoalType } from 'types';
import { useGoals } from "hooks";

export const EditGoalModal = ({
  checked,
  dueDate,
  id,
  text,
  toggleModal,
  type,
}: IAddGoalModal): JSX.Element => {
  const { editGoal } = useGoals();

  const [updatedGoal, setUpdatedGoal] = useState({
    checked,
    dueDate: dueDate ? new Date(dueDate) : new Date(),
    text,
    type,
  });

  const handleSubmit = useCallback(() => {
    editGoal(id, updatedGoal, toggleModal);
  }, [editGoal, id, toggleModal, updatedGoal]);

  // TODO: handleSubmit in form instead of button
  const actions = useMemo(() => (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button handleClick={handleSubmit} fullWidth type="submit" variant="primary">Save</Button>
    </>
  ), [handleSubmit, toggleModal]);

  const toggleOptions = [
    { label: 'Education', value: 'education' },
    { label: 'Personal', value: 'personal' },
    { label: 'Travel', value: 'travel' },
  ];

  const handleInput = useCallback((event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setUpdatedGoal( prev => ( { ...prev, [name]: value } ) )
  }, []);

  return (
    <Modal
      actions={actions}
      handleClose={toggleModal}
      title="Edit Goal"
    >
      <Form>
        <ToggleGroup
          handleChange={(val: TGoalType) => setUpdatedGoal((prev) => ({ ...prev, type: val }))}
          name="type"
          options={toggleOptions}
          value={updatedGoal.type}
        />
        <Textarea
          fullWidth
          label="Goal"
          name="text"
          handleChange={handleInput}
          placeholder="Goal"
          value={updatedGoal.text}
        />
        <DatePicker
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