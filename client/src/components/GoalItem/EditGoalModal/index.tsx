import { Button, DatePicker, Modal, Textarea, ToggleGroup } from 'components';
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';

import { GoalContext } from 'contexts';
import { IAddGoalModal } from './types';
import { TGoalType } from 'contexts/GoalContext/types';
import axios from "axios";
import styles from './addGoalModal.module.css';
import { toast } from "react-toastify";

export const EditGoalModal = ({ checked, dueDate, id, text, toggleModal, type }: IAddGoalModal): JSX.Element => {
  const { getGoals } = useContext(GoalContext);

  const [updatedGoal, setUpdatedGoal] = useState({
    checked,
    dueDate: dueDate ? new Date(dueDate) : new Date(),
    text,
    type,
  });

  const handleSubmit = useCallback(() => {
    axios( {
      url: `/api/goals/${id}`,
      method: "PUT",
      data: updatedGoal,
    } )
      .then( () => {
        toast.success("Your goal was updated successfully!");
        getGoals();
      } )
      .catch( () => {
        toast.error("Goal could not be updated. Please try again later!");
        // console.debug( "Error when creating a goal: " + error );
      } ).finally(() => {
        toggleModal();
      });
  }, [getGoals, id, updatedGoal]);

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
      <form className={ styles.form }>
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
      </form>
    </Modal>
  );
}