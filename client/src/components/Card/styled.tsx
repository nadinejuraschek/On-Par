import styled, { css } from "styled-components";

export const StyledCard = styled.div<{ $withHover: boolean }>`
  background-color: var(--white);
  border-radius: 2rem;
  filter: var(--shadow_sm);
  padding: 2rem;

  height: 100%;
  width: 100%;

  ${({ $withHover }) => $withHover && css`
    &:hover {
      background-color: var(--grey_25);
    }
  `}
`;