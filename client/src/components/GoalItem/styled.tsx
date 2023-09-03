import styled, { css } from "styled-components";
import { IStyledItem, IStyledLabel } from "./types";

import { Text } from "../Text";

export const Overlay = styled.div`
  display: none;

  position: absolute;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: var(--overlay_white);
  backdrop-filter: blur(0.3rem);

  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const StyledItem = styled.li<IStyledItem>`
  background-color: var(--white);
  border: 1px solid var(--grey_300);
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  opacity: ${({ $isChecked }) => $isChecked ? 0.4 : 1};
  overflow: hidden;
  cursor: ${({ $isChecked }) => $isChecked ? "unset" : "pointer"};

  list-style-type: none;

  position: relative;

  height: min-content;
  width: 100%;


  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover > ${Overlay} {
    display: flex;
  }

  ${({ $isOverdue }) => $isOverdue && css`
    background-color: var(--tertiary_25);
    border-color: var(--error_300);
  `};
`;

export const ItemBody = styled.div`
  padding: 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BadgesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Label = styled(Text)<IStyledLabel>`
  text-decoration: ${({ $isChecked }) => $isChecked ? "line-through" : "unset"};
`;
