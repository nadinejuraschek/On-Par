import { Date, StyledEvent } from "./styled";
import { EVENT_TYPE, IEvent } from "./types";
import { Text } from "../Text";

export const Event = ({ className = "", day, name, type = EVENT_TYPE.OTHER }: IEvent): JSX.Element => {
  const icon = () => {
    switch(type) {
      case EVENT_TYPE.BIRTHDAY:
        return "🎂";
      case EVENT_TYPE.HOLIDAY:
        return "🌟";
      default:
        return "📅";
    }
  }

  return (
    <StyledEvent className={className} $type={type}>
      <Date>
        <Text color="--grey_500" size="lg" weight="bold">{day}</Text>
      </Date>
      <Text size="sm" weight="bold">{`${icon()} ${name}`}</Text>
    </StyledEvent>
  );
};