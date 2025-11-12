import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";
import { Text } from "../Text";

export const MenuButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  padding: 0.4rem;

  &:hover, &:focus {
    background-color: var(--primary_100);
    border-color: var(--primary_100);
  }

  @media only screen and (min-width: 900px) {
    display: none;
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
  display: none;

  @media only screen and (min-width: 900px) {
    display: block;

    color: var(--primary_700);
    font-size: 12px;
    text-align: center;
  }
`;
