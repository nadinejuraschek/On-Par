import styled from "styled-components";
import { Button } from "components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem calc(100% - 7rem);
  grid-gap: 3rem;
  align-items: flex-start;

  overflow: hidden;

  height: 100%;
  width: 100%;
`;

export const Filter = styled.div`
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 16rem;
  }
`;

export const Actions = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  justify-content: flex-end;
  gap: 3rem;
`;

export const StyledButton = styled(Button)`
  min-width: 12rem;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2rem;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;