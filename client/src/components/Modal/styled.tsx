import styled from "styled-components";
import { IStyledHeader } from "./types";

export const StyledModal = styled.div`
  background-color: var(--white);
  border-radius: 2rem;
  filter: var(--shadow_sm);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  position: relative;

  width: 100%;
  max-width: 600px;
  z-index: 100;

  @media only screen and (min-width: 600px) {
    min-width: 400px;
    max-width: 600px;
    width: unset;
  }

  @media only screen and (min-width: 900px) {
    min-width: 500px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;

  backdrop-filter: blur(8px);
  background-color: var(--overlay);
  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div<IStyledHeader>`
  display: flex;
  align-items: center;
  justify-content: ${({ $hasTitle }) => $hasTitle ? "space-between" : "flex-end"};
  gap: 2rem;

  height: 4rem;
  width: 100%;
`;

export const Body = styled.div``;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;