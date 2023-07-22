import styled from "styled-components";

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;

  height: 100%;
  width: 100%;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 3rem;

    .header {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
  }
`;