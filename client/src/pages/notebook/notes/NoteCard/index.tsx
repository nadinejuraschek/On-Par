import { Button, Icon, Text } from "components";
import { useDeleteNote } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { TNote } from "types";
import { Actions, Body, Content, StyledNote, Title, TitleText } from "./styled";
import { INoteCard } from "./types";
import { EditNoteModal } from "../EditNoteModal";

export const NoteCard = ( {
  color,
  note,
  refetchNotes,
}: INoteCard ): JSX.Element => {
  const { _id, date, text, title } = note;

  const [openEditNoteModal, setOpenEditNoteModal] = useState(false);
  const [originalNote, setOriginalNote] = useState<TNote | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { deleteNote } = useDeleteNote();

  const handleDeleteNote = useCallback(() => {
    if (!_id) return;

    setSubmitting(true);
    deleteNote(_id);
    refetchNotes();
    setSubmitting(false);
  }, [_id, deleteNote, refetchNotes]);

  const handleEditCancel = useCallback(() => {
    setOpenEditNoteModal(false);
    setOriginalNote(null);
  }, []);

  const handleOpenEdit = useCallback((note: TNote) => {
    setOpenEditNoteModal(true);
    setOriginalNote(note);
  }, []);

  const renderEditNoteModal = useMemo(() => {
    if (!openEditNoteModal || !note) return null;

    return (
      <EditNoteModal
        handleEditCancel={handleEditCancel}
        note={originalNote}
        refetchNotes={refetchNotes}
      />
    );
  }, [handleEditCancel,
    note,
    openEditNoteModal,
    originalNote,
    refetchNotes]);

  return (
    <>
      <StyledNote color={color}>
        <Content>
          <Title>
            <TitleText>
              <Text as="p" color={ `--${ color }_800` } size="md" weight="bold">{ title }</Text>
              <Text as="p" color="--grey_400" size="xs">written on { date }</Text>
            </TitleText>
            <Actions>
              <Button
                handleClick={() => handleOpenEdit(note)}
                square
              >
                <Icon color="var(--grey_600)" type="pen" />
              </Button>
              <Button
                loading={submitting}
                handleClick={handleDeleteNote}
                square
              >
                <Icon color="var(--grey_600)" type="trash" />
              </Button>
            </Actions>
          </Title>
          <Body><Text size="sm">{ text }</Text></Body>
        </Content>
      </StyledNote>
      {renderEditNoteModal}
    </>
  );
};
