import { Input, Pagination } from "components";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;

  height: 100%;
  width: 100%;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4rem 1fr 4rem;
  }
`;

export const Header = styled.div`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled(Input)`
  height: 4rem;

  input {
    min-width: 26rem;
  }
`;

export const List = styled.div`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;

  overflow-y: auto;
  height: 100%;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledPagination = styled(Pagination)`
  grid-column: 1 / -1;
`;