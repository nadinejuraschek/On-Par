import styled from "styled-components";
import { IStyledHours } from "./types";
import { Button } from "../../../Button";
import { Text } from "../../../Text";

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  align-items: center;

  height: 5rem;
`;

export const Hours = styled(Text)<IStyledHours>`
  color: ${({ isOvertime }) => isOvertime ? "var(--error_600)" : "#2c662d"};
  font-weight: ${({ isOvertime }) => isOvertime ? "bold" : "normal"};
  width: 3rem;
`;

export const StartTrackerButton = styled(Button)`
  width: 5rem;
`;