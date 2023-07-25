import { StyledCard } from "./styled";
import { ICard } from "./types";

export const Card = ( { children, className = "", withHover = false }: ICard ): JSX.Element => (
  <StyledCard
    className={className}
    $withHover={withHover}
  >
    { children }
  </StyledCard>
);
