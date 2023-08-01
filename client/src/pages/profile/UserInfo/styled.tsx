import styled from "styled-components";

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  height: 100%;
  width: 100%;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;