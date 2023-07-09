import styled from "styled-components";

export const StyledTable = styled.table`
  background-color: var(--white);
  border-radius: 2rem;
  border-spacing: 0;
  filter: drop-shadow(0 1px 3px #10182810) drop-shadow(0 1px 2px #10182806);
  overflow: hidden;

  height: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledTHead = styled.thead``;

export const StyledTBody = styled.tbody``;

export const StyledTr = styled.tr`
  &:hover {
    background: var(--grey_50);
  }

  &:first-child {
    td {
      border-top: none;
    }
  }
`;

export const StyledTh = styled.th`
  background: var(--secondary_25);
  border-bottom: 1px solid var(--grey_200);
  border-left: 1px solid var(--grey_200);
  color: var(--grey_700);
  padding: 1rem 0.8rem;
  text-transform: none;
  vertical-align: inherit;

  -webkit-transition: background .1s ease,color .1s ease;
  transition: background .1s ease,color .1s ease;

  &:first-child {
    border-left: none;
  }
`;

export const StyledTd = styled.td`
  border-left: 1px solid var(--grey_200);
  border-top: 1px solid var(--grey_200);
  padding: 0.8rem;

  -webkit-transition: background .1s ease,color .1s ease;
  transition: background .1s ease,color .1s ease;

  &:first-child {
    border-left: none;
  }
`;