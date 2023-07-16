import styled from "styled-components";
import { Card } from "components";

export const CardContainer = styled(Card)`
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;

  padding: 0;

  overflow: hidden;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 4rem 6rem 1fr 6rem;
  align-items: center;

  font-size: 1.25rem;
  font-weight: bold;

  background-color: var(--secondary_25);
  border-bottom: 1px solid var(--grey_300);

  height: 6rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 4rem 6rem 1fr 12rem 6rem;
  }
`;

export const ListHeaderCol = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 1rem;

  display: flex;
  align-items: center;

  border-right: 1px solid var(--grey_300);
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  height: 100%;
  align-items: center;
`;
