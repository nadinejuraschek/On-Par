import { StyledBanner } from "./styled"
import { IBanner } from "./types";

export const Banner = ({ children, className = "", variant }: IBanner): JSX.Element => {
  return <StyledBanner className={className} variant={variant}>{children}</StyledBanner>;
};