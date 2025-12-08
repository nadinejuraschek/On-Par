import { Text } from "components";
import { Actions, Body, Content, StyledNote, Title, TitleText } from "./styled";
import { INoteCard } from "./types";
import { ActionDelete } from "./ActionDelete";
import { ActionEdit } from "./ActionEdit";

export const NoteCard = ( {
  color,
  note,
}: INoteCard ): JSX.Element => {
  const { _id, date, text, title } = note;

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
              <ActionEdit note={note} />
              <ActionDelete id={_id ?? ""} />
            </Actions>
          </Title>
          <Body><Text size="sm">{ text }</Text></Body>
        </Content>
      </StyledNote>
    </>
  );
};
