import styled, { css } from "styled-components";

import { TGoalType } from "types";
import { IStyledBadge } from "./types";

const getVariantStyles = (variant?: TGoalType) => {
  switch(variant) {
  case "education":
    return css`
        background-color: var(--warning_50);
        color: var(--warning_500);
      `;
  case "personal":
    return css`
        background-color: var(--tertiary_50);
        color: var(--tertiary_500);
      `;
  case "travel":
    return css`
        background-color: var(--secondary_50);
        color: var(--secondary_500);
      `;
  default:
    return css`
        background-color: var(--grey_100);
      `;
  }
};

export const StyledBadge = styled.div<IStyledBadge>`
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: max-content;

  ${({ $variant }) => getVariantStyles($variant)};
`;