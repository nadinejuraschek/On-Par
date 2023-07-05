import { StyledCard, StyledImage, Title } from './styled';

import { IFeatureCard } from "./types";
import { Link } from 'react-router-dom';

export const FeatureCard = ( { header, icon, link, title }: IFeatureCard ): JSX.Element => (
  <Link to={ link }>
    <StyledCard withHover>
      <StyledImage alt={ title } src={ icon } />
      <Title>{ header }</Title>
    </StyledCard>
  </Link>
);
