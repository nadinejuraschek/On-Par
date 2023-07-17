import styled, { css } from 'styled-components';
import { Card } from "components";
import { IStyledNote, TStyledNoteColor } from "./types";

const getNoteColor = (color: TStyledNoteColor) => {
  switch (color) {
    case 'blue':
      return css`
        background-color: var(--secondary_50);
        color: var(--secondary_800);
      `;
    case 'pink':
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
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

  button {
    background-color: transparent;
    border-color: transparent;

    &:hover {
      background-color: #ffffff4D;
      border-color: #ffffff4D;
    }
  }
`;

export const Body = styled.div``;