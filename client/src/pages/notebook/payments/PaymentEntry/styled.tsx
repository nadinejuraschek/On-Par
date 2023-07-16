import styled, { css } from 'styled-components';
import { Badge, DatePicker } from 'components';
import { IStyledListItem } from './types';

export const ListItem = styled.li<IStyledListItem>`
  display: grid;
  grid-template-columns: 4rem 6rem 1fr 6rem;
  align-items: center;

  border-bottom: 1px solid var(--grey_200);

  height: 6rem;

  position: relative;

  &:hover {
    background-color: var(--grey_25);
  }

  ${({ paidLate }) => paidLate && css`
    &::before {
      content: '';

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;

      border-left: 4px solid var(--error_500);
      border-radius: 0.8rem;
    }
  `}

  @media only screen and (min-width: 600px) {
    grid-template-columns: 4rem 6rem 1fr 12rem 6rem;
  }
`;

export const ItemIcon = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid var(--grey_200);
`;

export const Date = styled.div`
  grid-column: 3 / 4;

  height: 100%;
  width: 100%;

  border-right: 1px solid var(--grey_200);
  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const Week = styled.div`
  grid-column: 2 / 3;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  border-right: 1px solid var(--grey_200);
  padding: 0 1rem;
`;

export const Badges = styled.div`
  grid-column: 4 / 5;

  display: none;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  border-right: 1px solid var(--grey_200);
  padding: 0 1rem;

  @media only screen and (min-width: 600px) {
    display: flex;
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

export const StyledDatePicker = styled(DatePicker)`
  height: 4rem;
  width: 100%;
`;