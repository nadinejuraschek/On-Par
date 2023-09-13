import styled, { css } from "styled-components";

export const Col = styled.div<{ $align: "start" | "end", $border: boolean; $withPadding: boolean }>`
  border-left: ${({ $border }) => $border && "1px solid var(--grey_200)"};

  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align && `flex-${$align}` };
  justify-content: flex-start;
  gap: 0.2rem;

  height: 100%;
  width: 100%;

  ${({ $withPadding }) => $withPadding && css`
    padding: 0.8rem 1.6rem;
  `};
`;