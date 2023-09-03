import SelectComp from "react-select";
import styled from "styled-components";
import { IStyledField } from "./types";
import { Text } from "../Text";

export const Field = styled.div<IStyledField>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;

  height: 9rem;
  min-width: 20rem;

  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};
`;

export const IconInputWrapper = styled.div`
  width: 100%;

  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 4rem;
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSelect = styled(SelectComp)`
  div.selectInput__control::placeholder {
    color: var(--grey_500);
  }

  div.selectInput__control:hover,
  div.selectInput__control:active,
  div.selectInput__control:focus,
  div.selectInput__controliv:focus-visible {
    box-shadow: var(--shadow_xs_focused);
    border-color: var(--grey_300);
    outline: transparent;
  }

  &[disabled] {
    background-color: var(--grey_50);
    color: var(--grey_500);
  }

  div.selectInput__menu {
    border-radius: 0.8rem;
    overflow: hidden;
  }

  div.selectInput__menu-list {
    padding: 0;
  }

  div.selectInput__option:hover,
  div.selectInput__option--is-focused {
    background-color: var(--secondary_50);
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: var(--error_300);

  max-width: 100%;
`;