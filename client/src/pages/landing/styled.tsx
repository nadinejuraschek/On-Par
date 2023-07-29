import { Text } from "components";
import styled from "styled-components";
import { IStyledSection } from "./types";

export const StyledMain = styled.main`
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  height: unset;
`;

export const StyledSection = styled.section<IStyledSection>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.6rem;

  border-radius: 4rem;
  padding: 8rem;

  height: 70vh;
  width: 100%;

  background-color: ${({ color }) => color && color};
`;

export const Brand = styled.span`
  font-family: var(--font_brand);
  font-size: 2.4rem;
`;

export const Title = styled(Text)`
  display: flex;
  gap: 1.4rem;
`;

export const Subtitle = styled(Text)`
  font-size: 4rem;
  line-height: 5rem;

  max-width: 60%;
`;