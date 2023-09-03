import { Event, Text } from "components";
import { EmptyList, StyledList } from "./styled";
import { IEventsList } from "./types";

export const EventsList = ({ emptyMessage = "", list }: IEventsList): JSX.Element => {
  if (list.length === 0) {
    return (
      <EmptyList>
        <Text size="sm">{emptyMessage}</Text>
      </EmptyList>
    );
  }

  return (
    <StyledList>
      {list.map((event, index) => (
        <Event day={event.day} key={index} name={event.name} type={event.type} />
      ))}
    </StyledList>
  )
};
