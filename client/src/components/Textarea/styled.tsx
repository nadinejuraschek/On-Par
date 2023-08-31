import styled, { css } from "styled-components";

import { IStyledTextarea } from "./types";
import { Text } from "../Text";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;

  height: 16.8rem;
  min-width: 20rem;
`;

export const StyledTextarea = styled.textarea<IStyledTextarea>`
  background-color: var(--white);
  border: 1px solid var(--grey_300);
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0.8rem 1.2rem;
  transition: color 0.1s ease, border-color 0.1s ease;

  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};

  &::placeholder {
    color: var(--grey_500);
  }

  &:disabled {
    background-color: var(--grey_50);
    color: var(--grey_500);
  }

  &:active, &:focus, &:focus-visible {
    box-shadow: var(--shadow_xs_focused);
    outline: transparent;
  }

  ${({ $hasError }) => $hasError && css`
    border-color: var(--error_300);

    &:focus {
      box-shadow: var(--shadow_xs_focused_error);
    }
  `};
`;

export const ErrorText = styled(Text)`
  color: var(--error_300);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 100%;
`;