import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import { TVariant } from "types";
import { IButton } from "./types";

const getVariantStyles = (variant: TVariant) => {
  switch(variant) {
  case "primary":
    return primaryStyles;
  case "tertiary":
    return tertiaryStyles;
  case "danger":
    return dangerStyles;
  case "warning":
    return warningStyles;
  default:
    return secondaryStyles;
  }
};

const loaderRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const buttonStyles = css`
  border-radius: 0.8rem;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 1.6rem;
  text-decoration: none;

  height: 4rem;
  min-width: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:focus, &:focus-within, &:focus-visible {
    outline: none;
  }

  i {
    margin: 0;
  }
`;

const primaryStyles = css`
  background-color: var(--primary_600);
  border-color: var(--primary_600);
  box-shadow: var(--shadow_xs);
  color: var(--white);

  &:hover {
    background-color: var(--primary_700);
    border-color: var(--primary_700);
    color: var(--white);
  }

  &:active, &:focus {
    box-shadow: var(--shadow_xs_focused);
  }

  &:disabled {
    background-color: var(--primary_300);
    border-color: var(--primary_300);
  }
`;

const secondaryStyles = css`
  background-color: var(--white);
  border-color: var(--grey_300);
  box-shadow: var(--shadow_xs);
  color: var(--grey_700);

  &:hover {
    background-color: var(--grey_50);
    color: var(--grey_700);
  }

  &:active, &:focus {
    box-shadow: var(--shadow_xs_focused);
  }

  &:disabled {
    background-color: var(--white);
    border-color: var(--grey_300);
    color: var(--grey_300);
  }
`;

const tertiaryStyles = css`
  background: var(--grey_50);
  border-color: var(--grey_50);
  color: var(--grey_700);

  &:hover {
    background-color: var(--grey_100);
    border-color: var(--grey_100);
    color: var(--grey_700);
  }

  &:active, &:focus {
    background-color: var(--grey_100);
    box-shadow: var(--shadow_xs_focused);
  }

  &:disabled {
    color: var(--grey_300);

    &:hover {
      background: var(--grey_50);
      border-color: var(--grey_50);
      color: var(--grey_300);
    }
  }
`;

const dangerStyles = css`
  background-color: var(--error_50);
  border-color: var(--error_50);
  color: var(--error_700);

  &:hover {
    background-color: var(--error_100);
    border-color: var(--error_100);
    color: var(--error_800);
  }

  &:active, &:focus {
    box-shadow: var(--shadow_xs_focused_error);
  }

  &:disabled {
    background-color: var(--error_25);
    border-color: var(--error_25);
    color: var(--error_300);
  }
`;

const warningStyles = css`
  background-color: var(--warning_50);
  border-color: var(--warning_50);
  color: var(--warning_700);

  &:hover {
    background-color: var(--warning_100);
    border-color: var(--warning_100);
    color: var(--warning_800);
  }

  &:active, &:focus {
    box-shadow: var(--shadow_xs_focused_warning);
  }

  &:disabled {
    background-color: var(--warning_25);
    border-color: var(--warning_25);
    color: var(--warning_300);
  }
`;

export const StyledButton = styled.button<IButton>`
  ${buttonStyles};

  &:disabled {
    cursor: not-allowed;
  }

  ${({ align }) => align === "alignStart" && css`
    justify-content: flex-start;
  `};

  ${({ round }) => round && css`
    border-radius: 50%;

    min-width: 4rem;
    width: 4rem;
  `};

  ${({ square }) => square && css`
    min-width: 4rem;
    width: 4rem;
  `};

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${({ variant }) => getVariantStyles(variant)};
`;

export const StyledLink = styled(Link)<IButton>`
  ${buttonStyles};

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `};

  ${({ align }) => align === "alignStart" && css`
    justify-content: flex-start;
  `};

  ${({ round }) => round && css`
    border-radius: 50%;

    min-width: 4rem;
    width: 4rem;
  `};

  ${({ square }) => square && css`
    min-width: 4rem;
    width: 4rem;
  `};

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${({ variant }) => getVariantStyles(variant)};
`;

export const Loader = styled.div`
  display: inline-block;

  height: 1.4rem;
  width: 1.4rem;

  animation: ${loaderRotation} 1s linear infinite;
  border: 0.2rem solid var(--white);
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
`;
