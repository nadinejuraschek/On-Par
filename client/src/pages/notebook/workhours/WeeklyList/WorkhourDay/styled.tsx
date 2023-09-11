import { Button } from "components";
import styled from "styled-components";

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  display: grid;
  grid-template-columns: 10rem 1fr 10rem auto;
  align-items: center;

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
  justify-content: center;
  gap: 0.2rem;

  border-right: 1px solid var(--grey_200);
  padding: 0 1.5rem;
`;

export const Tracker = styled.div`
  padding: 0 1.5rem;

  display: flex;
  gap: 0.2rem;

  height: 100%;
  width: 100%;
`;

export const Hours = styled.div`
  border-left: 1px solid var(--grey_200);
  padding: 0 1.5rem;
  text-align: right;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.2rem;

  height: 100%;
  width: 100%;
`;

export const Actions = styled.div`
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