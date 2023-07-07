import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const List = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;

  max-height: calc(100% - 4rem);
  width: 100%;

  button, a {
    width: 100%;
  }
`;

export const StyledIcon = styled.div`
  height: 2rem;
  width: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 3.2rem; */
  gap: 3.2rem;

  height: 100%;
  width: 100%;
`;