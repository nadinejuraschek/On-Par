import { Button, Text } from "components";
import { useMemo } from "react";
import { Actions, Body, Content, StyledNote, Title, TitleText } from "./styled";
import { INoteCard } from "./types";

export const NoteCard = ( {
  color,
  deleteNote,
  handleOpenEdit,
  note,
}: INoteCard ): JSX.Element => {
  const { _id, date, text, title } = note;

  const renderNote = useMemo(() => (
    <Content>
      <Title>
        <TitleText>
          <Text as="p" color={ `--${ color }_800` } size="md" weight="bold">{ title }</Text>
          <Text as="p" color="--grey_400" size="xs">written on { date }</Text>
        </TitleText>
        <Actions>
          <Button
            square
            handleClick={() => handleOpenEdit(note)}
            variant="tertiary"
          >
            <i className="edit outline icon"></i>
          </Button>
          <Button
            square
            handleClick={ () => deleteNote( _id ) }
            variant="tertiary"
          >
            <i className="trash icon"></i>
          </Button>
        </Actions>
      </Title>
      <Body>{ text }</Body>
    </Content>
  ), [_id, color, date, deleteNote, handleOpenEdit, note, text, title]);

  return (
    <StyledNote color={color}>
      { renderNote }
    </StyledNote>
  );
};
