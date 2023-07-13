import styled from "styled-components";
import { IStyledEvent } from "./types";

export const StyledEvent = styled.div<IStyledEvent>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ birthday }) => birthday ? "var(--secondary_50)" : "var(--grey_100)"};
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  padding: 1.6rem;

  height: min-content;
`;

export const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 2rem;
`;