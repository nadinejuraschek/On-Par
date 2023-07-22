import styled from "styled-components";

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2.4rem;

  padding: 1rem 0;

  width: 100%;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
  }
`;