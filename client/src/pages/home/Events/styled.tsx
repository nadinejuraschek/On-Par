import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
  grid-gap: 2rem;

  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  overflow-y: auto;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;