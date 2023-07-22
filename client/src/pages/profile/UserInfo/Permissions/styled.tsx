import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;