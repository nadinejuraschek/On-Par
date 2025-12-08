import styled from "styled-components";

export const Group = styled.div`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
`;

export const List = styled.ul`
  height: 100%;

  margin: 0;
  overflow-y: auto;
  padding: 0.8rem;

  background-color: var(--grey_100);
  border-radius: 0.8rem;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;