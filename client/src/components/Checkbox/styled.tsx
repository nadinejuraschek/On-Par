import styled from "styled-components";
import { Text } from "../Text";

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  appearance: none;
  background-color: var(--primary_25);
  border: 1px solid var(--primary_600);
  border-radius: 0.4rem;
  color: var(--primary_500);
  cursor: pointer;
  font: inherit;
  margin: 0;

  position: relative;

  height: 1.75rem;
  width: 1.75rem;

  &::before {
    content: "";

    height: 1rem;
    width: 1rem;

    position: absolute;
    top: 0.25rem;
    left: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--primary_600);
    color: var(--primary_600);
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  &:checked::before {
    transform: scale(1);
  }
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