import styled from "styled-components";
import { Card } from "components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  width: 100%;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2rem;

    height: 100%;
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;

  button, a {
    width: 50%;
  }
`;

export const StyledHomeCard = styled(Card)`
  background-color: var(--white);
  border-radius: 20px;
  filter: var(--shadow_sm);
  padding: 2rem;

  height: 100%;
  width: 100%;
`;

export const HeaderCard = styled(StyledHomeCard)`
  grid-row: 1 / 2;

  display: grid;
  grid-template-rows: auto 4rem;
  grid-gap: 1rem;

  @media screen and (min-width: 900px) {
    grid-column: 1 / 4;
    grid-gap: 1.6rem;
  }
`;

export const HoursCard = styled(StyledHomeCard)`
  grid-row: 3 / 4;

  @media screen and (min-width: 900px) {
    grid-column: 4 / 7;
    grid-row: 1 / 2;
  }
`;

export const TodayCard = styled(StyledHomeCard)`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;

    grid-column: 1 / 3;
    grid-row: 2 / 4;
  }
`;

export const RemindersCard = styled(StyledHomeCard)`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;

    grid-column: 3 / 5;
    grid-row: 2 / 4;
  }
`;

export const CountdownCard = styled(StyledHomeCard)`
  grid-row: 4 / 5;

  @media screen and (min-width: 900px) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }
`;

export const MiscCard = styled(StyledHomeCard)`
  grid-row: 2 / 3;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 900px) {
    grid-column: 5 / 7;
    grid-row: 3 / 4;
  }
`;

export const ResourcesCard = styled(Card)`
  grid-column: 1 / 7;
  grid-row: 2 / 4;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  overflow-y: scroll;

  & > div {
    flex-wrap: unset;
  }
`;

export const CompletedYearCard = styled(Card)`
  grid-column: 4 / 7;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;
`;