import styled, { css } from "styled-components";
import { IStyledText, TSize } from "./types";

const getSize = (size: TSize) => {
  switch(size) {
  case "xs":
    return css`
        font-size: 1.2rem;
        line-height: 1.8rem;
      `;
  case "sm":
    return css`
        font-size: 1.4rem;
        line-height: 2rem;
      `;
  case "md":
    return css`
        font-size: 1.6rem;
        line-height: 2.4rem;
      `;
  case "lg":
    return css`
        font-size: 1.8rem;
        line-height: 2.8rem;
      `;
  case "xl":
    return css`
        font-size: 2rem;
        line-height: 3rem;
      `;
  case "xxl":
    return css`
        font-size: 2.4rem;
        line-height: 3.2rem;
      `;
  default:
    return css`
        font-size: 1.6rem;
        line-height: 2.4rem;
      `;
  }
};

export const StyledText = styled.div<IStyledText>`
  margin: 0;
  padding: 0;

  font-weight: ${({ $weight }) => $weight === "bold" ? 600 : 500};

  ${({ $size }) => getSize($size)};

  color: ${({ $color }) => $color && $color};

  &[disabled] {
    color: var(--grey_400);
  }
`;