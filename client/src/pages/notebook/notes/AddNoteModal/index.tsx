import * as dayjs from "dayjs";

import { Button, Input, Modal, Textarea } from "components";
import { ChangeEvent, FormEvent, useCallback, useContext, useMemo, useState } from 'react';

import { IAddNoteModal } from './types';
import { NoteContext } from "contexts";
import axios from "axios";
import { toast } from 'react-toastify';

export const AddNoteModal = ({ toggleModal }: IAddNoteModal): JSX.Element => {
  const currentDate = dayjs().format("MMMM D, YYYY");
  const { getNotes } = useContext( NoteContext );
  const [newNote, setNewNote] = useState( { date: currentDate, text: "", title: "" } );

  const handleSubmit = useCallback((event: FormEvent): void => {
    event.preventDefault();
    axios( {
      url: "/api/notes",
      method: "POST",
      data: newNote,
    } )
      .then( () => {
        toast.success('Your note has been added successfully!');
        getNotes();
      } )
      .catch( () => {
        toast.error('The note could not be added. Please try again later!');
        // console.debug( "Error when adding a note: " + error );
      } )
      .finally(() => {
        toggleModal();
        setNewNote( { date: currentDate, text: "", title: "" } );
      });
    }, [currentDate, getNotes, newNote, toggleModal]);

  const handleChange = useCallback((event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setNewNote( newNote => ( { ...newNote, [name]: value } ) )
  }, []);

  // TODO: handleSubmit in form instead of button
  const addNoteModalActions = useMemo(() => (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button handleClick={handleSubmit} fullWidth type="submit" variant="primary">Save</Button>
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