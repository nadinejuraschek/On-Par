import { Badge } from "components";
import styled, { css } from "styled-components";
import { IStyledListItem } from "./types";

export const ListItem = styled.div<IStyledListItem>`
  border: 1px solid;
  border-radius: 0.8rem;
  background-color: var(--white);
  border-color: var(--grey_200);
  box-shadow: var(--shadow_xs);

  display: grid;
  grid-template-columns: 8rem 1fr 6rem;
  align-items: center;
  grid-gap: 2rem;

  min-height: 8rem;

  position: relative;

  &:hover {
    background-color: var(--grey_50);
  }

  ${({ $warning }) => $warning && css`
    &::before {
      content: '';

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;

      border-left: 4px solid var(--warning_500);
      border-radius: 0.8rem;
    }
  `}
`;

export const DateCol = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  border-right: 1px solid var(--grey_200);
`;

export const DayMonth = styled.span`
  font-size: 1.3rem;
`;

export const Year = styled.span`
  font-size: 1.8rem;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Badges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.6rem;

  height: 100%;
  width: 100%;

  @media screen and (min-width: 450px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const LateBadge = styled(Badge)`
  background-color: var(--error_25);
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-self: flex-end;

  padding: 0 1rem;
`;
