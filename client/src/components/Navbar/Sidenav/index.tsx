import { FooterText, Links, SideNavMobile } from "./styled";

import { ISidenav } from "./types";
import { NavLinkComp as NavLink } from "../NavLink";
import { UserProvider } from "contexts";
import { navLinks } from "data";
import { useMemo } from "react";

export const Sidenav = ({ toggleSidenav }: ISidenav): JSX.Element => {
  const renderLinks = useMemo(() => {
    return navLinks.map(link => {
      const { iconSrc, label, link: href } = link;
      return (
        <NavLink
          iconSrc={ iconSrc }
          key={ `navLink_${ label }` }
          label={ label }
          link={ href }
          toggleSidenav={toggleSidenav}
        />
      );
    });
  }, [toggleSidenav]);

  return (
    <SideNavMobile>
      <Links>
        <UserProvider>
          { renderLinks }
        </UserProvider>
      </Links>
      <FooterText as="p" size="xs">© { new Date().getFullYear() } Nadine Pesso</FooterText>
    </SideNavMobile>
  );
}