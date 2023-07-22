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

  @media screen and (min-width: 900px) {
    background-color: var(--grey_25);
    border-radius: 40px 0 0 0;
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    width: calc(100vw - 150px);
  }
`;