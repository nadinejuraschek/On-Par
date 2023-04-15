import { Button, Card, Text } from "components";
import { useCallback, useMemo, useState } from "react";

import { INoteCard } from "./types";
import axios from "axios";
import styles from "./noteCard.module.css";
import { toast } from "react-toastify";

export const NoteCard = ( { color, date, deleteNote, getNotes, noteid, text, title = '' }: INoteCard ): JSX.Element => {
  const [updatedNote, setUpdatedNote] = useState( {} );
  const [showEditForm, setShowEditForm] = useState( false );

  const toggleEditForm = useCallback(() => setShowEditForm(!showEditForm), [showEditForm]);

  const handleEdit = useCallback(event => {
    event.preventDefault();
    axios
      .put( "/api/notes/" + noteid, updatedNote )
      .then( res => {
        getNotes();
        showEditForm ? setShowEditForm( false ) : setShowEditForm( true );
      } )
      .catch( () => {
        toast.error("Could not edit the note. Please try again later!");
        // console.debug( "Error when editing a note: " + error.response );
      } );
  }, [getNotes, noteid, showEditForm, updatedNote]);

  const handleChange = useCallback(event => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedNote( updatedNote => ( { ...updatedNote, [name]: value } ) );
  }, []);

  const renderNote = useMemo(() => (
    <div className={ styles.content }>
      <div className={ styles.title }>
        <div className={ styles.titleText }>
          <Text as="p" color={ `--${ color }_800` } size="md" weight="bold">{ title }</Text>
          <Text as="p" color="--grey_400" size="xs">written on { date }</Text>
        </div>
        <div className={ styles.actions }>
          <Button
            round
            handleClick={ toggleEditForm }
            variant="tertiary"
          >
            <i className="edit outline icon"></i>
          </Button>
          <Button
            round
            handleClick={ () => deleteNote( noteid ) }
            variant="tertiary"
          >
            <i className="trash icon"></i>
          </Button>
        </div>
      </div>
      <div className={ styles.body }>{ text }</div>
    </div>
  ), [color, date, deleteNote, noteid, text, title, toggleEditForm]);

  const renderEditForm = useMemo(() => (
    <form className="ui form" onSubmit={ handleEdit }>
      <div className="field">
        <input
          name="title"
          type="text"
          onChange={ handleChange }
          placeholder={ title }
        />
      </div>
      <div className="field">
        <textarea
          name="text"
          onChange={ handleChange }
          rows={3}
          placeholder={ text }
        />
      </div>
      <div className={ styles.editActions }>
        <Button
          handleClick={ () => {
            setShowEditForm(false);
            setUpdatedNote({});
          } }
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">Save</Button>
      </div>
    </form>
  ), [handleChange, handleEdit, text, title]);

  return (
    <Card className={ `${ styles.note } ${ styles[color] }` }>
      { showEditForm ? renderEditForm : renderNote }
    </Card>
  );
};
