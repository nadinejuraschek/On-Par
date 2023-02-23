import * as dayjs from "dayjs";

import { Button, Card, Text } from "components";
import { useContext, useState } from "react";

import { NoteContext } from "contexts";
import axios from "axios";
import styles from "./addNote.module.css";

export const AddNote = (): JSX.Element => {
  const currentDate = dayjs().format("MMMM D, YYYY");
  const { getNotes } = useContext( NoteContext );
  const [newNote, setNewNote] = useState( { date: currentDate, text: "", title: "" } );

  const handleSubmit = event => {
    event.preventDefault();
    axios( {
      url: "/api/notes",
      method: "POST",
      data: newNote,
    } )
      .then( response => {
        // re-render component
        setNewNote( { date: currentDate, text: "", title: "" } );
        getNotes();
      } )
      .catch( error => {
        console.log( "Error: " + error );
      } );
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
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
        <div className={ styles.saveButton }>
          <Button round variant="primary">
            <i className="plus icon"></i>
          </Button>
        </div>
      </form>
    </Card>
  );
}