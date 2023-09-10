import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px calc(100vh - 70px);

  @media screen and (min-width: 900px) {
    background-image: linear-gradient(to bottom, #b9c87940, var(--white));
    display: grid;
    grid-template-columns: 150px auto;

    position: relative;

    &::before {
      content: '';

      background-image: linear-gradient(
        to bottom,
        var(--primary_50),
        var(--white)
      );

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      height: 50vh;
      width: 100%;
    }
  }
`;

export const StyledView = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;

  overflow: auto;

  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  @media screen and (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 1 / -1;

    background-color: var(--grey_25);
    border-radius: 40px 0 0 0;
    padding: 3.6rem;

    width: calc(100vw - 150px);
  }
`;

export const StyledHeader = styled.div`
  height: max-content;

  display: flex;
`;

export const StyledNav = styled.nav`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  background-color: var(--primary_50);
  box-shadow: 2px 0 4px #46637320;
  padding: 0 2.4rem;

  height: 7rem;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 900px) {
    grid-column: 1 / 2;

    border-radius: 0 0 4rem 0;
    box-shadow: none;
    padding: 2.4rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
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