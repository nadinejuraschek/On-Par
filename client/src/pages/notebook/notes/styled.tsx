import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  width: 100%;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content repeat(2, auto);
  }
`;

export const Header = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const List = styled.div`
  grid-column: 1 / -1;
  grid-row: 4 / 5;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  @media only screen and (min-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 3 / -1;
  }
`;