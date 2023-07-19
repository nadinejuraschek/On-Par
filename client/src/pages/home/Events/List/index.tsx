import { Event, Text } from 'components';
import { IEventsList } from './types';
import { EmptyList, StyledList } from './styled';

export const EventsList = ({ emptyMessage = '', list }: IEventsList): JSX.Element => {
  if (list.length === 0) {
    return (
      <EmptyList>
        <Text size="xs">{emptyMessage}</Text>
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
