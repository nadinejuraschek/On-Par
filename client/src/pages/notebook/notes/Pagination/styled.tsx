import { Button } from "components";
import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  grid-column: 1 / -1;
`;

export const Options = styled.div`
  display: flex;
  gap: 1rem;
`;


export const Page = styled(Button)<{ active: boolean }>`
  background-color: ${({ active }) => active ? "var(--primary_50)" : "var(--white)"};
  color: ${({ active }) => active ? "var(--grey_700)" : "var(--grey_600)"};

  &:hover, &:focus {
    background-color: ${({ active }) => active && "var(--primary_50)"};
  }
`;