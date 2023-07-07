import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Label = styled.div`
  display: block;

  color: var(--primary_700);
  font-size: 3rem;
  margin-left: 1rem;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
  }

  @media only screen and (min-width: 900px) {
    display: none;

    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0;


    height: 1.5rem;
    margin-top: 0.5rem;
  }
`;


export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;

  @media only screen and (min-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active ${Label} {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 900px) {
    height: 6rem;

    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const StyledIcon = styled.div`
  display: none;

  @media only screen and (min-width: 900px) {
    display: block;
    height: 4.5rem;
    width: 4.5rem;
  }
`;