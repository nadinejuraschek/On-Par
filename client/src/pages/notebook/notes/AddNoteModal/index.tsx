import * as dayjs from "dayjs";
import { Button, Input, Modal, Textarea } from "components";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { IAddNoteModal } from './types';

export const AddNoteModal = ({ createNote, toggleModal }: IAddNoteModal): JSX.Element => {
  const currentDate = dayjs().format("MMMM D, YYYY");
  const [newNote, setNewNote] = useState( { date: currentDate, text: "", title: "" } );

  const handleSubmit = useCallback((event: FormEvent): void => {
    event.preventDefault();

    createNote(newNote, () => {
      toggleModal();
      setNewNote( { date: currentDate, text: "", title: "" } );
    });
    }, [createNote, currentDate, newNote, toggleModal]);

  const handleChange = useCallback((event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setNewNote( newNote => ( { ...newNote, [name]: value } ) )
  }, []);

  // TODO: move submit to form instead of button
  const addNoteModalActions = useMemo(() => (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button fullWidth handleClick={handleSubmit} type="submit" variant="primary">Save</Button>
    </>
  ), [handleSubmit, toggleModal]);

  return (
    <Modal
      actions={addNoteModalActions}
      handleClose={toggleModal}
      title="New Note"
    >
      <form>
        <Input
          fullWidth
          label="Title"
          name="title"
          handleChange={ handleChange }
          placeholder="Title"
          value={ newNote.title }
        />
        <Textarea
          fullWidth
          label="Note"
          name="text"
          handleChange={ handleChange }
          placeholder="Note"
          value={ newNote.text }
        />
      </form>
    </Modal>
  );
}