import DateTimePicker from "react-datetime-picker";
import styled, { css } from "styled-components";
import { IStyledDateTimePicker, IStyledField } from "./types";

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
  position: relative;

  width: 100%;

  i {
    font-size: 1.6rem;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 4rem;

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const StyledDateTimePicker = styled(DateTimePicker)<IStyledDateTimePicker>`
  .react-datetime-picker__wrapper {
    ${({ hasError }) => hasError && css`
      border-color: var(--error_300);

      &:focus {
        box-shadow: var(--shadow_xs_focused_error);
      }
    `};
  }

  ${({ hasIcon }) => hasIcon && css`
    & > div:first-child {
      padding-left: 4rem;
    }
  `};
`;