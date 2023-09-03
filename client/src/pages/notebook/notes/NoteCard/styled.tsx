import { Card } from "components";
import styled, { css } from "styled-components";
import { IStyledNote, TStyledNoteColor } from "./types";

const getNoteColor = (color: TStyledNoteColor) => {
  switch (color) {
  case "blue":
    return css`
        background-color: var(--secondary_50);
        color: var(--secondary_800);
      `;
  case "pink":
    return css`
        background-color: var(--tertiary_50);
        color: var(--tertiary_800);
      `;
  default:
    return css`
        background-color: var(--warning_50);
        color: var(--warning_800);
      `;
  }
}

export const StyledNote = styled(Card)<IStyledNote>`
  height: auto;

  ${({ color }) => getNoteColor(color)};

  &:hover {
    button {
      display: flex;
    }
  }

  @media only screen and (min-width: 900px) {
    height: min-content;
    width: calc(50% - 0.5rem);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 9rem;
  grid-template-rows: 1fr;
  grid-gap: 2rem;

  min-height: 4rem;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  height: 4rem;
  width: 9rem;

  button {
    display: none;
  }
`;

export const Body = styled.div``;