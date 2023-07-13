import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";
import { Text } from "../Text";

export const NavMobile = styled.nav`
  background-color: var(--primary_50);
  box-shadow: 2px 0 4px #46637320;
  height: 70px;
  padding: 0 24px;
  z-index: 10;

  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export const MenuButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  padding: 0.4rem;

  &:hover, &:focus {
    background-color: var(--primary_100);
    border-color: var(--primary_100);
  }
`;

export const NavDesktop = styled.nav`
  display: none;

  @media only screen and (min-width: 900px) {
    background-color: var(--primary_50);
    border-radius: 0 0 4rem 0;
    padding: 2.4rem;

    grid-column: 1 / 2;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content repeat(6, 1fr) min-content;
    row-gap: 1rem;

    height: 100vh;
    width: 15rem;

    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 0;

      height: 50vh;
      width: 100%;

      background-image: linear-gradient(to bottom, #b9c87940, transparent);
      content: '';
    }

    a {
      z-index: 1;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const LogoText = styled(Text)`
  color: var(--primary_700);
  font-family: 'grand_hotelregular';
`;

export const Footer = styled.footer`
  color: var(--primary_700);
  font-size: 12px;
  text-align: center;
`;
