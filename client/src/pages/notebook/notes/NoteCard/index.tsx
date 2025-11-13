import { Button, Icon, Text } from "components";
import { useCallback, useMemo, useState } from "react";
import { TNote } from "types";
import { Actions, Body, Content, StyledNote, Title, TitleText } from "./styled";
import { INoteCard } from "./types";
import { EditNoteModal } from "../EditNoteModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "api";

export const NoteCard = ( {
  color,
  note,
}: INoteCard ): JSX.Element => {
  const { _id, date, text, title } = note;

  const queryClient = useQueryClient();

  const [openEditNoteModal, setOpenEditNoteModal] = useState(false);
  const [originalNote, setOriginalNote] = useState<TNote | null>(null);

  const {
    // TODO: display error toast
    // error,
    isPending,
    mutate,
  } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  const handleDeleteNote = useCallback(() => {
    if (!_id) return;

    mutate(_id);
  }, [_id, mutate]);

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
                loading={isPending}
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
