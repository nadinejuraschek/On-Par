import { Date, StyledEvent } from "./styled";
import { IEvent } from "./types";
import { Text } from "../Text";

export const Event = ({ className = "", day, name, type = "holiday" }: IEvent): JSX.Element => (
  <StyledEvent className={className} $birthday={type === "birthday"}>
    <Date>
      <Text color="--grey_500" size="lg" weight="bold">{day}</Text>
    </Date>
    <Text size="sm" weight="bold">{name}</Text>
  </StyledEvent>
);