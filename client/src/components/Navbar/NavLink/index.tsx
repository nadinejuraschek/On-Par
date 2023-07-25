import { Label, StyledIcon, StyledNavLink, Wrapper } from "./styled";
import { INavLink } from "./types";

export const NavLinkComp = ( {
  iconSrc,
  label,
  link,
  toggleSidenav,
}: INavLink ): JSX.Element => (
  <StyledNavLink onClick={ toggleSidenav } to={ link }>
    <Wrapper>
      <StyledIcon>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore-next-line */}
        <img alt={ label } src={ iconSrc } />
      </StyledIcon>
      <Label>{ label }</Label>
    </Wrapper>
  </StyledNavLink>
);
