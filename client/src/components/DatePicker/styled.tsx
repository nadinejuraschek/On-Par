import DateTimePicker from "react-datetime-picker";
import styled, { css } from "styled-components";
import { IStyledDateTimePicker } from "./types";

export const StyledDateTimePicker = styled(DateTimePicker)<IStyledDateTimePicker>`
  .react-datetime-picker__wrapper {
    ${({ $hasError }) => $hasError && css`
      border-color: var(--error_300);

      &:focus {
        box-shadow: var(--shadow_xs_focused_error);
      }
    `};
  }

  ${({ $hasIcon }) => $hasIcon && css`
    & > div:first-child {
      padding-left: 4rem;
    }
  `};
`;
