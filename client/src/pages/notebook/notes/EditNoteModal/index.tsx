import { Button, Input, Modal, Textarea } from "components";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TNoteFormData, noteSchema } from "schema";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IEditNoteModal } from "./types";

export const EditNoteModal = ({
  editNote,
  handleEditCancel,
  note,
}: IEditNoteModal): JSX.Element => {
  const [errors, setErrors] = useState<ZodFormattedError<TNoteFormData> | undefined>(undefined);
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleSubmit = useCallback((): void => {
    const validation = noteSchema.safeParse(updatedNote);

    if (validation.success === false) {
      setErrors(validation.error.format());
      return;
    }

    setErrors(undefined);

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
      <Form>
        <Input
          error={errors?.title?._errors?.[0] && errors.title._errors[0]}
          fullWidth
          label="Title"
          name="title"
          handleChange={ handleChange }
          placeholder="Title"
          value={ updatedNote.title }
        />
        <Textarea
          error={errors?.text?._errors?.[0] && errors.text._errors[0]}
          fullWidth
          label="Note"
          name="text"
          handleChange={ handleChange }
          placeholder="Note"
          value={ updatedNote.text }
        />
      </Form>
    </Modal>
  );
}