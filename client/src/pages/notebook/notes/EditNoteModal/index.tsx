import { Button, Input, Modal, Textarea } from "components";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TNoteFormData, noteSchema } from "schema";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";
import { IEditNoteModal } from "./types";
import { editNote } from "api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const EditNoteModal = ({
  handleEditCancel,
  note,
}: IEditNoteModal): JSX.Element => {
  const queryClient = useQueryClient();

  const [errors, setErrors] = useState<ZodFormattedError<TNoteFormData> | undefined>(undefined);
  const [updatedNote, setUpdatedNote] = useState(note);

  const {
    // TODO: display error toast
    // error,
    isPending,
    mutate,
  } = useMutation({
    mutationFn: editNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  const handleSubmit = useCallback((): void => {
    if (!note._id) return;

    const validation = noteSchema.safeParse(updatedNote);

    if (validation.success === false) {
      setErrors(validation.error.format());
      return;
    }

    setErrors(undefined);

    mutate(updatedNote);
    handleEditCancel();
  }, [mutate,
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
      <Button
        fullWidth
        handleClick={handleSubmit}
        loading={isPending}
        type="submit"
        variant="primary"
      >
        Save
      </Button>
    </>
  ), [handleEditCancel, handleSubmit, isPending]);

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