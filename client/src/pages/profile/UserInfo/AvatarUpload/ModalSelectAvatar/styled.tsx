import Avatar from "avataaars";
import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`;

export const AvatarWrapper = styled.div`
  margin: auto;
`;

export const StyledAvatar = styled(Avatar)`
  height: 16rem;
  width: 16rem;

  background-color: var(--secondary_25);
  border-radius: 50%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 0 0.4rem 2rem;

  overflow-y: auto;

  max-height: 20rem;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FieldPair = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;

  width: 100%;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;