import { Button, Icon, Text } from "components";
import { useDeleteNote } from "hooks";
import { useCallback, useState } from "react";
import { Actions, Body, Content, StyledNote, Title, TitleText } from "./styled";
import { INoteCard } from "./types";

export const NoteCard = ( {
  color,
  handleOpenEdit,
  note,
  refetchNotes,
}: INoteCard ): JSX.Element => {
  const { _id, date, text, title } = note;

  const [submitting, setSubmitting] = useState(false);

  const { deleteNote } = useDeleteNote();

  const handleDeleteNote = useCallback(() => {
    setSubmitting(true);
    deleteNote(_id);
    refetchNotes();
    setSubmitting(false);
  }, [_id, deleteNote, refetchNotes]);

  return (
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
  );
};
