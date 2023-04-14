import * as dayjs from "dayjs";

import { Button, Card, Text } from "components";
import { ChangeEvent, FormEvent } from 'react';
import { useContext, useState } from "react";

import { NoteContext } from "contexts";
import axios from "axios";
import styles from "./addNote.module.css";
import { toast } from 'react-toastify';

export const AddNote = (): JSX.Element => {
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
        // re-render component
        setNewNote( { date: currentDate, text: "", title: "" } );
        getNotes();
      } )
      .catch( () => {
        toast.error('The note could not be added. Please try again later!');
        // console.debug( "Error when adding a note: " + error );
      } );
  };

  const handleChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setNewNote( newNote => ( { ...newNote, [name]: value } ) );
  };

  return (
    <Card className={ styles.addNote }>
      <Text as="h4" size="sm" weight="bold">New Note</Text>
      <form className="ui form" onSubmit={ handleSubmit }>
        <div className="field">
          <input
            name="title"
            type="text"
            onChange={ handleChange }
            placeholder="Title"
            value={ newNote.title }
          />
        </div>
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
        <Button fullWidth type="submit" variant="primary">
          Add Note
        </Button>
      </form>
    </Card>
  );
}