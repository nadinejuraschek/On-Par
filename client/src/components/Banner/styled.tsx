import styled, { css } from "styled-components";
import { TBannerVariant } from "./types";

const getVariantStyle = (variant?: TBannerVariant) => {
  switch (variant) {
  case "error":
    return css`
      background-color: var(--error_25);
      border: 1px solid var(--error_100);
    `;
  case "secondary":
    return css`
      background-color: var(--secondary_25);
      border: 1px solid var(--grey_200);
    `;
  case "warning":
    return css`
      background-color: var(--warning_25);
      border: 1px solid var(--warning_100);
    `;
  default:
    return css`
      background-color: var(--white);
      border: 1px solid var(--grey_200);
    `;
  }
};

export const StyledBanner = styled.div<{ $variant?: TBannerVariant }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;

  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  padding: 1.6rem;

  ${({ $variant }) => getVariantStyle($variant)};
`;