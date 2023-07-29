import styled, { css } from "styled-components";
import { TVariant } from "types";
import { IStyledTab, ITabs } from "./types";
import { Text } from "../Text";

const getVariantStyles = (active: boolean, variant: TVariant) => {
  switch(variant) {
  case "secondary":
    return css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        border-radius: 0.8rem;
        padding: 0.8rem 1.2rem;

        height: 3.6rem;

        ${active && css`
          background-color: var(--primary_50);
          color: var(--primary_700);
        `};
      `;
  default:
    return css`
        border-bottom: 2px solid ${active ? "var(--primary_700)" : "transparent"};
      `;
  }
};

export const Tabbar = styled.div<ITabs>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 0;

  height: 4.2rem;
  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};

  ${({ spaceBetween }) => spaceBetween && css`
    justify-content: space-between;
    gap: unset;
  `};

  ${({ variant }) => variant === "primary" && css`
    border-bottom: 1px solid var(--grey_200);
  `};
`;

export const TabText = styled(Text)`
  color: var(--grey_700);
`;

export const Tab = styled.div<IStyledTab>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  cursor: pointer;
  padding: 0 0.4rem 0.8rem;

  height: 100%;

  position: relative;
  bottom: -1px;

  &[disabled] {
    cursor: not-allowed;
  }

  ${({ active, variant }) => getVariantStyles(active, variant)};
`;
