import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote as deleteNoteFn } from "api";
import { Button, Icon } from "components";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { TNote } from "types";
import { EditNoteModal } from "./EditNoteModal";

export const ActionEdit = ({ note }: { note: TNote }) => {
  const queryClient = useQueryClient();

  const [openEditNoteModal, setOpenEditNoteModal] = useState(false);
  const [originalNote, setOriginalNote] = useState<TNote | null>(null);

  const handleEditCancel = useCallback(() => {
    setOpenEditNoteModal(false);
    setOriginalNote(null);
  }, []);

  const handleOpenEdit = useCallback((note: TNote) => {
    setOpenEditNoteModal(true);
    setOriginalNote(note);
  }, []);

  const {
    isPending,
    mutate: deleteNote,
  } = useMutation({
    mutationFn: deleteNoteFn,
    onError: () => toast.error("The note could not be deleted. Please try again."),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      toast.success("The note has been deleted successfully!");
      setOpenEditNoteModal(false);
    },
  });

  const renderEditNoteModal = useMemo(() => {
    if (!openEditNoteModal || !originalNote) return null;

    return (
      <EditNoteModal
        handleEditCancel={handleEditCancel}
        note={originalNote}
      />
    );
  }, [handleEditCancel,
    openEditNoteModal,
    originalNote]);

  return (
    <>
      <Button
        loading={isPending}
        handleClick={() => setOpenEditNoteModal(true)}
        square
      >
        <Icon color="var(--grey_600)" type="pen" />
      </Button>
      {renderEditNoteModal}
    </>
  );
};