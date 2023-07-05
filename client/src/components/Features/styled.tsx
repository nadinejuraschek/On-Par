import { Card } from 'components';
import { Text } from '../Text';

import styled from 'styled-components';

export const StyledCard = styled(Card)`
  text-align: center;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  height: 4rem;
  width: 4rem;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    height: 6rem;
    width: 6rem;

    margin-right: 0;
  }

  @media screen and (min-width: 900px) {
    height: 8rem;
    width: 8rem;
  }
`;

export const Title = styled(Text)`
  color: var(--grey_800);
  font-size: 1.5rem;
  font-weight: 700;

  @media screen and (min-width: 600px) {
    margin-top: 2rem;
  }
`;