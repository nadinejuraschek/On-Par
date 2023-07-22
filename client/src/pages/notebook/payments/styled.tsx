import styled from "styled-components";

export const List = styled.div`
  grid-row: 2 / 3;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export const InfoText = styled.span`
  display: flex;
  gap: 1rem;

  i {
    color: var(--warning_500);
  }
`;