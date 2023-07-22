import { ICard } from "./types";
import { StyledCard } from './styled';

export const Card = ( { children, className = "", withHover = false }: ICard ): JSX.Element => (
  <StyledCard
    className={className}
    $withHover={withHover}
  >
    { children }
  </StyledCard>
);
