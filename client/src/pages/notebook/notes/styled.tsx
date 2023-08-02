import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  height: calc(100% - 6rem);
  width: 100%;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4rem calc(100% - 12rem) 4rem;
  }
`;

export const Header = styled.div`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const List = styled.div`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;

  overflow-y: auto;
  height: 100%;
`;