import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr auto;
  grid-gap: 1rem;

  height: 100%;
  width: 100%;
`;

export const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed var(--grey_200);
  border-radius: 0.8rem;
  padding: 1.6rem;
  text-align: center;

  height: 100%;
`;