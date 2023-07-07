import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 700;
  height: 40px;
  line-height: 40px;
`;

export const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;