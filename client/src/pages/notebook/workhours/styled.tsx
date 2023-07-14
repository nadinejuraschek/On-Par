import styled from "styled-components";
import { Card } from "components";

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;

  height: 100%;
  width: 100%;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto repeat(5, 1fr) max-content;
    column-gap: 1rem;
    row-gap: 2rem;
  }
`;

export const TabsWrapper = styled.div`
  grid-column: 1 / 6;
  grid-row: 1 / 2;
`;

export const CardAddWorkhour = styled(Card)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
  grid-gap: 1rem;
  align-items: start;

  @media only screen and (min-width: 900px) {
    grid-column: 6 / 9;
    grid-row: 3 / -1;
  }
`;

export const CardTracker = styled(Card)`
  @media only screen and (min-width: 900px) {
    grid-column: 1 / 6;
    grid-row: 2 / 7;
  }
`;

export const CardTimer = styled(Card)`
  display: none;

  @media only screen and (min-width: 900px) {
    grid-column: 6 / 9;
    grid-row: 1 / 3;

    display: block;
  }
`;

export const CardReminder = styled(Card)`
  grid-row: 2 / 3;

  strong {
    color: var(--error_600);
  }

  @media only screen and (min-width: 900px) {
    grid-column: 1 / 6;
    grid-row: 7 / 8;
  }
`;