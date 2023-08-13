import styled from "styled-components";
import { IStyledHours } from "./types";
import { Button } from "../../../Button";
import { Text } from "../../../Text";

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  display: grid;
  grid-template-columns: 6rem 1fr auto;
  align-items: center;
  grid-gap: 2rem;

  border: 1px solid;
  border-radius: 0.8rem;
  background-color: var(--white);
  border-color: var(--grey_200);
  box-shadow: var(--shadow_xs);
  overflow: hidden;

  height: 6rem;
  width: 100%;
`;

export const Date = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  border-right: 1px solid var(--grey_200);
`;

export const Day = styled.span`
  font-size: 1.8rem;
`;

export const Month = styled.span`
  font-size: 1.4rem;
`;

export const Hours = styled(Text)<IStyledHours>`
  color: ${({ isOvertime }) => isOvertime ? "var(--error_600)" : "#2c662d"};
  font-weight: ${({ isOvertime }) => isOvertime ? "bold" : "normal"};

  text-align: right;

  width: 100%;
`;

export const TrackerWrapper = styled.div`
  border-left: 1px solid var(--grey_200);
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 11rem;
`;

export const StartTrackerButton = styled(Button)`
  width: 5rem;
`;