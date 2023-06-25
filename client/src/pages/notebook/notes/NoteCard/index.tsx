import { Button, Card, Text } from "components";
import { useCallback, useMemo, useState } from "react";

import { INoteCard } from "./types";
import { TNote } from "types";
import styles from "./noteCard.module.css";

export const NoteCard = ( {
  color,
  date,
  deleteNote,
  editNote,
  noteid,
  text,
  title = '',
}: INoteCard ): JSX.Element => {
  const [updatedNote, setUpdatedNote] = useState<TNote>({
    date,
    text,
    title,
  });
  const [showEditForm, setShowEditForm] = useState( false );

  const toggleEditForm = useCallback(() => setShowEditForm(!showEditForm), [showEditForm]);

  const handleEdit = useCallback(event => {
    event.preventDefault();
    editNote(noteid, updatedNote, () => {
      showEditForm ? setShowEditForm( false ) : setShowEditForm( true );
    });
  }, [editNote, noteid, showEditForm, updatedNote]);

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
          // placeholder={ title }
          value={updatedNote.title}
        />
      </div>
      <div className="field">
        <textarea
          name="text"
          onChange={ handleChange }
          rows={3}
          // placeholder={ text }
          value={updatedNote.text}
        />
      </div>
      <div className={ styles.editActions }>
        <Button
          handleClick={ () => {
            setShowEditForm(false);
            setUpdatedNote({
              date,
              text,
              title,
            });
          } }
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">Save</Button>
      </div>
    </form>
  ), [date, handleChange, handleEdit, text, title, updatedNote]);

  return (
    <Card className={ `${ styles.note } ${ styles[color] }` }>
      { showEditForm ? renderEditForm : renderNote }
    </Card>
  );
};
