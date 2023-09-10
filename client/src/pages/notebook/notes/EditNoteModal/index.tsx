import { Button, Input, Modal, Textarea } from "components";
import { useEditNote } from "hooks";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TNoteFormData, noteSchema } from "schema";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IEditNoteModal } from "./types";

export const EditNoteModal = ({
  handleEditCancel,
  note,
  refetchNotes,
}: IEditNoteModal): JSX.Element => {
  const [errors, setErrors] = useState<ZodFormattedError<TNoteFormData> | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(note);

  const { editNote } = useEditNote();

  const handleSubmit = useCallback((): void => {
    if (!note._id) return;

    setSubmitting(true);
    const validation = noteSchema.safeParse(updatedNote);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setSubmitting(false);
      return;
    }

    setErrors(undefined);

    editNote(note._id, updatedNote);
    refetchNotes();
    setSubmitting(false);
    handleEditCancel();
  }, [editNote,
    handleEditCancel,
    note,
    refetchNotes,
    updatedNote]);

  const handleChange = useCallback((event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setUpdatedNote( (prev) => ( { ...prev, [target.name]: target.value } ) )
  }, []);

  // TODO: move submit to form instead of button
  const addNoteModalActions = useMemo(() => (
    <>
      <Button fullWidth handleClick={handleEditCancel}>Cancel</Button>
      <Button
        fullWidth
        handleClick={handleSubmit}
        loading={submitting}
        type="submit"
        variant="primary"
      >
        Save
      </Button>
    </>
  ), [handleEditCancel, handleSubmit, submitting]);

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