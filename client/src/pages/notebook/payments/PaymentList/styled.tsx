import styled from "styled-components";

export const List = styled.div`
  grid-row: 2 / 3;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
`;