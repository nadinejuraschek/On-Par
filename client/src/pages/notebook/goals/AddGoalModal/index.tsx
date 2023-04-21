import { Button, DatePicker, Modal, Textarea, ToggleGroup } from 'components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { IAddGoalModal } from './types';
import styles from './addGoalModal.module.css';

export const AddGoalModal = ({ toggleModal }: IAddGoalModal): JSX.Element => {
  const [newGoal, setNewGoal] = useState({
    dueDate: undefined,
    goal: undefined,
    type: undefined,
  });

  const handleSubmit = useCallback(() => {

  }, []);

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
    setNewGoal( prev => ( { ...prev, [name]: value } ) )
  }, []);

  return (
    <Modal
      actions={actions}
      handleClose={toggleModal}
      title="New Goal"
    >
      <form className={ styles.form }>
        <ToggleGroup
          handleChange={(val: string) => setNewGoal((prev) => ({ ...prev, type: val }))}
          name="type"
          options={toggleOptions}
          value={newGoal.type}
        />
        <Textarea
          fullWidth
          label="Goal"
          name="goal"
          handleChange={handleInput}
          placeholder="Goal"
          value={ newGoal.goal }
        />
        <DatePicker
          format="MM/dd/yyyy"
          fullWidth
          handleChange={(date: Date) => setNewGoal((prev) => ({ ...prev, dueDate: date }))}
          label="Due Date"
          name="dueDate"
          value={newGoal.dueDate}
        />
      </form>
    </Modal>
  );
}