import styled, { css } from "styled-components";
import { EVENT_TYPE, IStyledEvent } from "./types";

export const StyledEvent = styled.div<IStyledEvent>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  padding: 1.6rem;

  height: min-content;

  ${({ $type }) => {
    switch($type) {
      case EVENT_TYPE.BIRTHDAY:
        return css`
          background-color: var(--secondary_50);
        `;
      case EVENT_TYPE.HOLIDAY:
        return css`
          background-color: var(--grey_100);
        `;
      default:
        return css`
          background-color: var(--grey_50);
        `;
    }
  }}
`;

export const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 2rem;
`;