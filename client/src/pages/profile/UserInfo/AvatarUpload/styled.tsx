import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: 600px) {
    gap: 3rem;
  }

  @media only screen and (min-width: 900px) {
    gap: 4rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 12rem;
  width: 12rem;

  background-color: var(--secondary_25);
  border: 1px solid var(--grey_200);
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  overflow: hidden;

  @media only screen and (min-width: 600px) {
    height: 14rem;
    width: 14rem;
  }

  @media only screen and (min-width: 900px) {
    height: 15rem;
    width: 15rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;