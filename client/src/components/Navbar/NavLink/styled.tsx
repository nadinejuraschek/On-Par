import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;

  border-radius: 0.8rem;
  color: var(--primary_700);
  font-size: 3rem;
  margin-left: 1rem;
  padding: 1.6rem 1.2rem;

  width: 100%;

  &.active {
    font-weight: bold;
  }

  @media only screen and (min-width: 900px) {
    font-size: 1.5rem;
    margin-left: 0;

    &:hover {
      background-color: #ffffff99;
    }

    &.active {
      background-color: #ffffff99;
    }
  }
`;
