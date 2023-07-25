import { Button, Input, Modal, Textarea } from "components";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { IEditNoteModal } from "./types";

export const EditNoteModal = ({
  editNote,
  handleEditCancel,
  note,
}: IEditNoteModal): JSX.Element => {
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleSubmit = useCallback((event: FormEvent): void => {
    event.preventDefault();

    editNote(note._id, updatedNote, handleEditCancel);
  }, [editNote,
    handleEditCancel,
    note,
    updatedNote]);

  const handleChange = useCallback((event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setUpdatedNote( (prev) => ( { ...prev, [target.name]: target.value } ) )
  }, []);

  // TODO: move submit to form instead of button
  const addNoteModalActions = useMemo(() => (
    <>
      <Button fullWidth handleClick={handleEditCancel}>Cancel</Button>
      <Button fullWidth handleClick={handleSubmit} type="submit" variant="primary">Save</Button>
    </>
  ), [handleEditCancel, handleSubmit]);

  return (
    <Modal
      actions={addNoteModalActions}
      handleClose={handleEditCancel}
      title="New Note"
    >
      <form>
        <Input
          fullWidth
          label="Title"
          name="title"
          handleChange={ handleChange }
          placeholder="Title"
          value={ updatedNote.title }
        />
        <Textarea
          fullWidth
          label="Note"
          name="text"
          handleChange={ handleChange }
          placeholder="Note"
          value={ updatedNote.text }
        />
      </form>
    </Modal>
  );
}