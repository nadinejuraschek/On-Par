import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote as deleteNoteFn } from "api";
import { Button, Icon, Modal } from "components";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";

export const ActionDelete = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const {
    isPending,
    mutate: deleteNote,
  } = useMutation({
    mutationFn: deleteNoteFn,
    onError: () => toast.error("The note could not be deleted. Please try again."),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      toast.success("The note has been deleted successfully!");
      setOpenDeleteConfirm(false);
    },
  });

  const handleDeleteNote = useCallback(() => {
    if (!id) return;

    deleteNote(id);
  }, [id, deleteNote]);

  const renderDeleteConfirmModal = useMemo(() => {
    if (!openDeleteConfirm) return null;

    const actions = (
      <>
        <Button fullWidth handleClick={() => setOpenDeleteConfirm(false)}>Cancel</Button>
        <Button
          fullWidth
          handleClick={handleDeleteNote}
          loading={isPending}
          variant="danger"
        >
          Delete
        </Button>
      </>
    );

    return (
      <Modal actions={actions} handleClose={() => setOpenDeleteConfirm(false)} title="Delete Note">
        Are you sure you&apos;d like to delete this note?
      </Modal>
    )
  }, [
    handleDeleteNote,
    isPending,
    openDeleteConfirm,
    setOpenDeleteConfirm,
  ]);

  return (
    <>
      <Button
        loading={isPending}
        handleClick={() => setOpenDeleteConfirm(true)}
        square
      >
        <Icon color="var(--grey_600)" type="trash" />
      </Button>
      {renderDeleteConfirmModal}
    </>
  );
};