import { styled } from "styled-components";

export const StyledSidenav = styled.div`
  display: none;

  @media only screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    align-self: start;

    padding: 2.4rem 0;

    z-index: 1;
  }
`;

export const SidenavSection = styled.div`
  padding: 1.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SidenavSectionLabel = styled.div`
  color: var(--primary_500);
  font-size: 1.8rem;
  margin-left: 1rem;
  text-transform: uppercase;

  padding: 0.8rem 1.2rem;

  @media only screen and (min-width: 900px) {
    font-size: 1.2rem;
    margin-left: 0;
  }
`;

export const SidenavSectionSublinks = styled.div`
  margin-left: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
