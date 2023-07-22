import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed var(--grey_200);
  border-radius: 0.8rem;
  padding: 1.6rem;
  text-align: center;

  height: min-content;
`;