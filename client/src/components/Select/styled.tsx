import SelectComp from "react-select";
import styled from "styled-components";
import { TSelectOption } from "./types";

export const StyledSelect = styled(SelectComp<TSelectOption, false>)`
  div.selectInput__control {
    font-size: 1.4rem;
    line-height: 2rem;
  }

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
    font-size: 1.4rem;
    line-height: 2rem;
    overflow: hidden;
  }

  div.selectInput__menu-list {
    padding: 0;
  }

  div.selectInput__option:hover,
  div.selectInput__option--is-focused {
    background-color: var(--grey_100);
  }

  div.selectInput__option--is-selected {
    background-color: var(--primary_50);
    color: var(--grey_900);
  }
`;
