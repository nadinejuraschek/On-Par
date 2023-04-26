import { Button, DatePicker, Modal, Textarea, ToggleGroup } from 'components';
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';

import { GoalContext } from 'contexts';
import { IAddGoalModal } from './types';
import axios from "axios";
import styles from './addGoalModal.module.css';
import { toast } from "react-toastify";

export const AddGoalModal = ({ toggleModal }: IAddGoalModal): JSX.Element => {
  const { getGoals } = useContext(GoalContext);

  const [newGoal, setNewGoal] = useState({
    dueDate: undefined,
    text: undefined,
    type: undefined,
  });

  const handleSubmit = useCallback(() => {
    axios( {
      url: "/api/goals",
      method: "POST",
      data: {
        ...newGoal,
        checked: false,
      },
    } )
      .then( () => {
        toast.success("Your goal was added successfully!");
        getGoals();
      } )
      .catch( () => {
        toast.error("Goal could not be added. Please try again later!");
        // console.debug( "Error when creating a goal: " + error );
      } ).finally(() => {
        setNewGoal({
          dueDate: undefined,
          text: undefined,
          type: undefined,
        });
        toggleModal();
      });
  }, [getGoals, newGoal]);

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
      </form>
    </Modal>
  );
}