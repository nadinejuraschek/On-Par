import { StyledNavLink } from "./styled";
import { INavLink } from "./types";

export const NavLinkComp = ( {
  label,
  link,
  toggleSidenav,
}: INavLink ): JSX.Element => (
  <StyledNavLink onClick={ toggleSidenav } to={ link }>
    { label }
  </StyledNavLink>
);
