import styled from "styled-components";
import { IStyledInput } from "./types";
import { Text } from "../Text";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;

  height: 9rem;
  min-width: 20rem;
`;

export const IconInputWrapper = styled.div`
  position: relative;

  width: 100%;

  &:active, &:focus, &:focus-visible {
    box-shadow: var(--shadow_xs_focused);
    outline: transparent;
  }
`;

export const StyledInput = styled.input<IStyledInput>`
  background-color: var(--white);
  border: 1px solid var(--grey_300);
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0 1.2rem;
  padding-left: ${({ hasIcon }) => hasIcon ? "4rem" : "1.2rem"};
  transition: color 0.1s ease, border-color 0.1s ease;

  height: 4rem;
  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};

  &::placeholder {
    color: var(--grey_500);
  }

  &:disabled {
    background-color: var(--grey_50);
    color: var(--grey_500);
    cursor: not-allowed;

    &:active, &:focus, &:focus-visible {
      box-shadow: none;
    }
  }

  &:active, &:focus, &:focus-visible {
    box-shadow: var(--shadow_xs_focused);
    outline: transparent;
  }
`;

export const StyledIcon = styled.i`
  font-size: 1.6rem !important;
  margin: 0 !important;

  display: flex !important;
  align-items: center;
  justify-content: center;

  height: 4rem !important;
  width: 4rem !important;

  position: absolute;
  top: 0;
  left: 0;
`;

export const ErrorText = styled(Text)`
  border-color: var(--error_300);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 100%;

  &:focus {
    box-shadow: var(--shadow_xs_focused_error);
  }
`;