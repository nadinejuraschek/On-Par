import { Text } from "components";
import styled from "styled-components";

export const WeeklyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
  grid-gap: 2rem;

  height: 100%;
  width: 100%;
`;

export const DateNav = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

export const WeekRange = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 2rem;
  width: 12rem;
`;