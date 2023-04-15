import * as dayjs from "dayjs";

import { Button, Input, Modal } from "components";
import { ChangeEvent, FormEvent } from 'react';
import { useContext, useState } from "react";

import { IAddNoteModal } from './types';
import { NoteContext } from "contexts";
import axios from "axios";
import styles from "./addNoteModal.module.css";
import { toast } from 'react-toastify';

export const AddNoteModal = ({ toggleModal }: IAddNoteModal): JSX.Element => {
  const currentDate = dayjs().format("MMMM D, YYYY");
  const { getNotes } = useContext( NoteContext );
  const [newNote, setNewNote] = useState( { date: currentDate, text: "", title: "" } );

  const handleSubmit = (event: FormEvent): void => {
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
    };

  const handleChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setNewNote( newNote => ( { ...newNote, [name]: value } ) )
  };

  // TODO: handleSubmit in form instead of button
  const addNoteModalActions = (
    <>
      <Button fullWidth handleClick={toggleModal}>Cancel</Button>
      <Button autoFocus handleClick={handleSubmit} fullWidth type="submit" variant="primary">Save</Button>
    </>
  );

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
        {/* TODO: replace with new Textarea component */}
        <div className="field">
          <textarea
            className={ styles.textarea }
            name="text"
            onChange={ handleChange }
            rows={3}
            placeholder="Note"
            value={ newNote.text }
          />
        </div>
      </form>
    </Modal>
  );
}