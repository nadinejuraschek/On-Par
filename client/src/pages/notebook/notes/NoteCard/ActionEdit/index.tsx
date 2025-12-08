import { Button, Icon } from "components";
import { useCallback, useMemo, useState } from "react";
import { TNote } from "types";
import { EditNoteModal } from "./EditNoteModal";

export const ActionEdit = ({ note }: { note: TNote }) => {
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
        handleClick={() => handleOpenEdit(note)}
        square
      >
        <Icon color="var(--grey_600)" type="pen" />
      </Button>
      {renderEditNoteModal}
    </>
  );
};