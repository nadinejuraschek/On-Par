import { Button, Input, Modal, Textarea } from "components";
import * as dayjs from "dayjs";
import { useCreateNote } from "hooks";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TNoteFormData, noteSchema } from "schema";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IAddNoteModal } from "./types";

export const AddNoteModal = ({ refetchNotes, toggleModal }: IAddNoteModal): JSX.Element | null => {
  const currentDate = dayjs().format("MMMM D, YYYY");

  const [errors, setErrors] = useState<ZodFormattedError<TNoteFormData> | undefined>(undefined);
  const [newNote, setNewNote] = useState( { date: currentDate, text: "", title: "" } );
  const [submitting, setSubmitting] = useState(false);

  const { createNote } = useCreateNote();

  const handleSubmit = useCallback((): void => {
    setSubmitting(true);
    const validation = noteSchema.safeParse(newNote);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setSubmitting(false);
      return;
    }

    setErrors(undefined);

    createNote(newNote);
    refetchNotes();
    setSubmitting(false);
    toggleModal();
  }, [createNote,
    newNote,
    refetchNotes,
    toggleModal]);

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
  ), [handleSubmit, submitting, toggleModal]);

  if (!open) return null;

  return (
    <Modal
      actions={addNoteModalActions}
      handleClose={toggleModal}
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
          value={ newNote.title }
        />
        <Textarea
          error={errors?.text?._errors?.[0] && errors.text._errors[0]}
          fullWidth
          label="Note"
          name="text"
          handleChange={ handleChange }
          placeholder="Note"
          value={ newNote.text }
        />
      </Form>
    </Modal>
  );
}